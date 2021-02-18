import React , { useState, useEffect } from 'react';
import axios from "axios";
import './post.css'
import { Avatar } from "@material-ui/core"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

export default function Post() {

  // avatar 
  const [img,setimg]=useState();
  // const[name,setname]=useState();
  // const [displayName, setdisplayname]= useState();
  const userId = localStorage.getItem('id');
  const [userpostId, setuserpostid]=useState();
  const [data, setdata]= useState();

    useEffect(() => {
        async function fetchData() {
          try {
            ///////////to get the user /////////////
            const user = await axios.get('http://localhost:1200/user/'+userId);
            console.log('hellow user', user.data);
            // setimg() to set the avatar 
            // set the dispaly name 
            // const cutEmail= user.data.email.split(/[@]/)
            // console.log('cut', cutEmail)
            // setdisplayname('@'+cutEmail[0])
            // console.log('name',displayName)
            //set name
            // setname(user.data.username)
            setimg(user.data.img)
            /////////TO GET THE POSTS///////////
            const result = await axios.get("http://localhost:1200/user/post");
            console.log('the posts',result.data);
            setdata(result.data);
            setuserpostid(result.data.userId);
            /////////To GET THE OWNER OF THE POST //
          } catch (error) {
            console.log(error, "oh nooooo");
          }
        } 
        fetchData();
      },[]);


    return (
       
      // map function 
        <div className='post'>
          <ol style={{listStyleType:'none'}}>
        {data!== undefined ? data.map((post,i)=>(
          <li key={i}>
            <div className="post_avatar">
                <Avatar/>
            </div> 
            <div className="post_body">
                <div className="post_header">
                 <div className="post__headerText">
                    <h3>
                       {/* {name}{" "} */}
                       <span className="post__headerSpecial">
                        {/* {displayName !== undefined ? displayName : null} */}
                      </span>
                    </h3>
                 </div>
                    <div className="post_headerDescription">
                        <p> {post.desc}</p>
                    </div>
                </div>
                <img classname="imag" src={post.url} alt="post" height="250px" width="400px"/> <br/><br/><br/>
                <div className="post_footer_line"> numbers</div>
                <div className='post_footer'>
                <div className="like-line1"><ChatBubbleOutlineIcon fontSize="small"/>  </div>
                <div className="like-line2" ><RepeatIcon fontSize="small" /> </div>
                <div className="like-line3" ><FavoriteBorderIcon fontSize="small" />  </div>
                <div  className="like-line4"><PublishIcon fontSize="small" /> </div>
                </div>
                 <div className="comment_footer">
                <Avatar src={img}/>
                 <input placeholder="write a comment"/>
                </div>
            </div>


          </li>
        )) :null }
        </ol>
        </div>
    )
}


// {
//     displayName,
//     username,
//     text,
//     image,
//     avatar
// }
//  <div>
//            
//           </div>