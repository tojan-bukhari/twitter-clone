import React from 'react'
import './sidebar.css'
export default function Sidebar() {
    return (
        <div className="profile_side_bar">
           <div className="profile_side_bar_line1">Tweets</div> 
           <div className="profile_side_bar_line2">Tweets & replies</div>
           <div className="profile_side_bar_line3">Media</div>
           <div className="profile_side_bar_line4">Likes</div>
        </div>
    )
}
