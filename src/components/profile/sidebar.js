import React from 'react'
import './sidebar.css'
export default function Sidebar() {
    return (
        <div className="profile_side_bar">
           <div style={{paddingTop:"20px"}} className="profile_side_bar_line1">Tweets</div> 
           <div style={{paddingTop:"20px"}}className="profile_side_bar_line2">Tweets & replies</div>
           <div style={{paddingTop:"20px"}}className="profile_side_bar_line3">Media</div>
           <div style={{paddingTop:"20px"}}className="profile_side_bar_line4">Likes</div>
        </div>
    )
}
