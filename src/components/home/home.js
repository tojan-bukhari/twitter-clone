import React from 'react';
import Feed from './feed';
import Header from './header';
import Widgets from './widgets'
import './home.css'
export default function Home() {
    return (
        <div className='home'>
           
                {/* <div><Header/></div> */}
          <Feed/>
           <Widgets/>
         
  
     </div>
    )
}
