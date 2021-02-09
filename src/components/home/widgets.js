import React from 'react'
import './widgets.css'
import { Avatar, Button } from "@material-ui/core"

export default function Widgets() {
    return (
       
        <div className="widgets">
           <div className="widgets__trendsContainer">
             <h2 className='trends'>Trend for you</h2>
             <div className="trends_line"></div>
             <div>
               <div className="trend">#dragon</div>
             </div>

           </div>
           <div className="widgets__followContainer">
             <h2 className="follow">Who to follow</h2>
             <div className="trends_line"></div>
             <div className='profile_contaner'>
             <div className="profile">
               <Avatar/>
               <h2 className="name_follow">Name</h2>
               <h6>followers 100</h6>
               <Button style={{background: '#2F80ED',borderRadius: '4px',width: '79px',height: '24px', marginTop:'15px', marginLeft:'50px', color:'white', padding:'10px', fontSize:'10px',}}> +Follow</Button>
             </div>
             
             </div>
           </div>
       </div>
)}






