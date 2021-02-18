import React from 'react';
import Feed from './feed';
// import Header from './header';
import Widgets from './widgets'
import './home.css';
import SidebarH from './sidebarhome'
export default function Home() {
    return (
        <div className='home'>
           
                {/* <div><Header/></div> */}
            <div style={{marginRight:'40px'}}> <Widgets/></div>
            <div><Feed/></div>
            <div><SidebarH/></div>
          
           
           
         
  
     </div>
    )
}
