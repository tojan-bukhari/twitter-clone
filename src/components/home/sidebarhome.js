import React from 'react'
import './sidebarhome.css'
export default function SidebarH() {
    return (
        <div className="home_sidebar">
           <div style={{paddingTop:"20px"}} className="profile_side_bar_line1">Tweets</div> 
           <div style={{paddingTop:"20px"}}className="profile_side_bar_line2">Tweets & replies</div>
           <div style={{paddingTop:"20px"}}className="profile_side_bar_line3">Media</div>
           <div style={{paddingTop:"20px"}}className="profile_side_bar_line4">Likes</div>
        </div>
    )
}
