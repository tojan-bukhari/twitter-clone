import React from 'react'
import Feed from './feed'
import Widgets from './widgets'
import './home.css'
export default function Home() {
    return (
        <div className='home'>
            {/* header bar */}

            {/* feeds */}
            <Feed/>
            {/* widgets */}
            <Widgets/>
        </div>
    )
}
