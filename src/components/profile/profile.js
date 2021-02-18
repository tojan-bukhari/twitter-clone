import React ,{useState, useEffect} from 'react';
import axios from "axios";
import { storage } from '../firebase';
import { Avatar 
} from "@material-ui/core";
import './profile.css';
import Sidebar from './sidebar.js';
import {Form} from 'react-bootstrap';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Modal, Button } from 'antd';


export default function Profile() {
    const [img,setimg] = useState(null);
    const[proileimage,setprofileimage] = useState();
    const [name,setname]=useState();
    const [data,setdata]=useState();
    const [url,seturl]=useState();
    const[progress,setprogress]=useState();
    const [displayName, setdisplayname]= useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const userId=localStorage.getItem('id')
    useEffect(() => {
        async function fetchData() {
          try {
              /////// TO GET THE USER
            const user = await axios.get("http://localhost:1200/user/"+ userId);
            console.log('user profile',user.data)
            //// set name 
            const cutEmail= user.data.email.split(/[@]/)
            console.log('cut', cutEmail)
            setdisplayname('@'+cutEmail[0])
            setname(user.data.username)
            setprofileimage(user.data.img)
             /////////////////TO GET USER POSTS /////////
            const userposts = await axios.get("http://localhost:1200/user/post/"+ userId)
            console.log()
            setdata(userposts.data)
          } catch (error) {
            console.log(error, "oh nooooo");
          }
        } 
        fetchData();
      },[]);
      //////////////////////////HANDEL UPLOADE//////////
      const handleUpload = () => {
        const uploadTask = storage.ref(`images/${img.name}`).put(img);
          console.log(img,'this is img handel uploade')
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
                   .child(img.name)
                   .getDownloadURL()
                   .then(url => {
                       console.log(url,'URL');
                       seturl(url)
   
                   })
               });
           }
           /////////////////// MODAL HANDEL PROFILE IMAGE /////////////////////
           const showModal = () => {
            setIsModalVisible(true);
          };
        
          const handleOk = async() => {
            setIsModalVisible(false);
            var newImg = {"img": url}
            console.log('this is image ', newImg)
            const profileimage = await axios.put("http://localhost:1200/user/"+ userId, newImg);
            console.log('this is image updated',profileimage.data)
             setprofileimage(profileimage.data.img)
          };
        
          const handleCancel = () => {
            setIsModalVisible(false);
          };
    
    return (
        <div>
            <div>
            {/* bakground  */}
            <div className='info_bar'>
                <div style={{dispaly:'flex'}}>
                  <Avatar src={proileimage} height='70px' width='70px'/> 
                 <Button type="primary" onClick={showModal}>
                    Edit  profile image
                </Button>
                <Modal title="Edit profile image" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                      <div>
                    <Form.Group >
                        <Form.File id="exampleFormControlimg" onChange={(e)=>{setimg(e.target.files[0])}} />
                        {img!==null? <Button onClick={handleUpload}>uploade</Button>:null}
                    </Form.Group> 
                    </div>
                </Modal>
                  
                    <p> fullstack-developer ready to get a jop </p>
                    
                </div>
                  <h3>{name}</h3>
                
                </div>
            </div>
            <div className="profile_posts">
                {/* posts  */}
                <ol style={{listStyleType:'none'}}>
                {data !== undefined ? data.map((userpost,i)=>(
                    <li key={i}>
                         <div className="post_avatar">
                <Avatar src={proileimage}/>
            </div> 
            <div className="post_body">
                <div className="post_header">
                 <div className="post__headerText">
                    <h3>
                       {name}{" "}
                       <span className="post__headerSpecial">
                        {displayName !== undefined ? displayName : null}
                      </span>
                    </h3>
                 </div>
                    <div className="post_headerDescription">
                        <p> {userpost.desc}</p>
                    </div>
                </div>
                <img classname="imag" src={userpost.url} alt="post" height="250px" width="400px"/> <br/><br/><br/>
                <div className="post_footer_line"> numbers</div>
                <div className='post_footer'>
                <div className="like-line1"><ChatBubbleOutlineIcon fontSize="small"/>  </div>
                <div className="like-line2" ><RepeatIcon fontSize="small" /> </div>
                <div className="like-line3" ><FavoriteBorderIcon fontSize="small" />  </div>
                <div  className="like-line4"><PublishIcon fontSize="small" /> </div>
                </div>
                 <div className="comment_footer">
                <Avatar src=""/>
                 <input placeholder="write a comment"/>
                </div>
            </div>
                    </li>
                )) :null }
                </ol>
            </div>
            <div>
                {/* side */}
                <Sidebar/>
            </div>
        </div>
    )
}
