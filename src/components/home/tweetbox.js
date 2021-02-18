import React , { useState , useEffect}from 'react'
import './tweetbox.css'
import { Avatar , Button} from "@material-ui/core";
import axios from 'axios';
import { storage } from '../firebase';
import {Form} from 'react-bootstrap'
export default function TweetBox() {

    const[ desc, setdesc ]= useState(); // desc
    const[ image ,  setimg ]= useState(null);   
    const [progress , setprogress] = useState();
    const[ url ,  seturl ]= useState(); // image
    const [avatar, setavatar]=useState(); // to set the avatar for each post
    const [name , setname]=useState(); // to set the name 
    const [displayname, setdisplayname]=useState();// to set display name
    const userId=localStorage.getItem('id')


    useEffect(() => {
        async function fetchData() {
          try {
            ///////////to get the user /////////////
            const user = await axios.get('http://localhost:1200/user/'+userId);
            console.log('hellow user', user.data);
            const cutEmail= user.data.email.split(/[@]/)
            console.log('cut', cutEmail)
            setdisplayname('@'+cutEmail[0])
            // console.log('name',displayName)
            //set name
            setname(user.data.username)
            setavatar(user.data.img)
          
          } catch (error) {
            console.log(error, "oh nooooo");
          }
        } 
        fetchData();
      },[]);
    /////////////HANDEL UPLOADWE///////////////////////
    const submit= async(e)=>{
        try {
        const newpost={
            desc,
            url,
            userId}
        console.log('new post befor', newpost)
        const res = await axios.post('http://localhost:1200/user/post', newpost)
        console.log("result post ", res.data)
        // console.log("postId ", )
        var postId = res.data._id
        // console.log("result post config data ", res.config.data)
        // //////////// TO UPDATE THE POST AUTOMATICKLY /////////
        var updatpost = {
            'avatar':avatar,
            'name':name,
            'displayname':displayname}
        console.log('this is post ', updatpost)
        const result = await axios.put("http://localhost:1200/user/post/"+ postId, updatpost);
        console.log('this is post updated',result.data)


        document.getElementById("create_tweet").reset();
        setdesc("");
        setimg(null);
        seturl(undefined);
       } catch (error) {
        console.log(error, "oh nooooo");
      }

    }
    //////////////////////////// handele firebase///////////

       
    const handleUpload = () => {
     const uploadTask = storage.ref(`images/${image.name}`).put(image);
       console.log(image,'this is image handel uploade')
        uploadTask.on('state_changed',
        (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setprogress(progress)
         },
        (error) => {
        // error function ....
        console.log(error);
          },
          () => {
        // complete function ....
              storage.ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url,'URL');
                    seturl(url)

                })
            });
        }
    return (
        <div className="tweetbox">
           <form id='create_tweet'>
               <div className='tweetbox_input'>
                   <Avatar src=""/>
                   {/* avatar */}
                   {/* input */}
                   <input style={{margin:'30px', padding:"20px"}} placeholder="write tweet" onChange={(e)=>{setdesc(e.target.value)}}/>
                    { url !== undefined  ? <iframe className='iframe_style' title="myFrame" src={url} alt="firebase-image" width='300' height='200' ></iframe> : null}
                    
               </div>
               {/* <ImgCrop rotate>
               
               </ImgCrop> */} 
               <div className="tweet_button_ubloaad_line">
                <div> <Button className="tweet_button" onClick={submit}>Tweet</Button></div>
                <div style={{paddingTop:'25px'}}> { image !== null ? <Button onClick={handleUpload}>uploade</Button> : null}</div>
                <div style={{padding:"40px"}}>
                <Form.Group className="upload_button">
                    <Form.File id="exampleFormControlimage" onChange={(e)=>{setimg(e.target.files[0])}} />
                </Form.Group> </div>
               </div>
           </form> 
        </div>
    )
}
