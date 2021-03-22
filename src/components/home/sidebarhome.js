import React from 'react';
import './sidebarhome.css';
import { Link } from 'react-router-dom';
export default function SidebarH() {
    const userId = localStorage.getItem('id')
    const handellogout = ()=>{
        localStorage.clear();
    }
    return (
        <div className="home_sidebar">
           <div style={{paddingTop:"20px"}} className="home_side_bar_line1"><Link style={{ textDecoration: 'none',color: 'currentColor'}}to={'/profile/'+userId}>Profile</Link></div> 
           <div style={{paddingTop:"20px"}}className="home_side_bar_line2">Explore</div>
           <div style={{paddingTop:"20px"}}className="home_side_bar_line3">bookmarks</div>
           <div style={{paddingTop:"20px"}}className="home_side_bar_line4"><Link style={{ textDecoration: 'none',color: 'currentColor'}} onClick={handellogout}to={'/'}>Logout</Link></div>
        </div>
    )
}
