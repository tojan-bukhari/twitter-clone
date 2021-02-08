import React from 'react'
import './post.css'
import { Avatar } from "@material-ui/core"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
export default function Post({
    displayName,
    username,
    verifide,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
           <div className="post_avatar">
               <Avatar/>
           </div> 
           <div className="post_body">
               <div className="post_header">
                <div className="post__headerText">
                   <h3>
                      gintoki yorozya{" "}
                      <span className="post__headerSpecial">
                      @ gin-12333
                     </span>
                   </h3>
                </div>
                   <div className="post_headerDescription">
                       <p> if you want to live a perfect life live it as achiled</p>
                   </div>
               </div>
               <img classname="imag" src="https://i.pinimg.com/564x/d8/50/7d/d8507d0f79aef2cbf35c9d199d225fa6.jpg" alt="post"/>
               <div className='post_footer'>
               <div className="like-line1"><ChatBubbleOutlineIcon fontSize="small"/>  </div>
               <div className="like-line2" ><RepeatIcon fontSize="small" /> </div>
               <div className="like-line3" ><FavoriteBorderIcon fontSize="small" />  </div>
               <div  className="like-line4"><PublishIcon fontSize="small" /> </div>
               </div>
           </div>
        </div>
    )
}
