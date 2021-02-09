import React from 'react'
import './feed.css'
import TweetBox from './tweetbox'
import Post from './post'
export default function Feed() {
    return (
        <div className='feed'>
            {/* header */}
            <div className='feed_header'>
            <h2>Home</h2>
            </div>
            {/* tweet box */}
            <TweetBox/>
            {/* postes */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
           
        </div>
    )
}
