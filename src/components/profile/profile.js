import React from 'react'
import { Avatar } from "@material-ui/core"
import './profile.css'
import Sidebar from './sidebar.js'
import Post from '../home/post'
export default function Profile() {
    return (
        <div>
            <div>
            {/* bakground  */}
            <div className='info_bar'>
                <div style={{dispaly:'flex'}}>
                    <Avatar/>
                    <p> fullstack-developer ready to get a jop</p>
                    
                </div>
                  <h3>M.r ken</h3>
                
                </div>
            </div>
            <div className="profile_posts">
                {/* posts  */}
                <Post/>
            </div>
            <div>
                {/* side */}
                <Sidebar/>
            </div>
        </div>
    )
}
