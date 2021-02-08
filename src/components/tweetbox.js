import React from 'react'
import './tweetbox.css'
import { Avatar , Button} from "@material-ui/core"
export default function TweetBox() {
    return (
        <div className="tweetbox">
           <form>
               <div className='tweetbox_input'>
                   <Avatar src=""/>
                   {/* avatar */}
                   {/* input */}
                   <input placeholder="write tweet"/>

               </div>
               <Button className="tweet_button">Tweet</Button>
           </form> 
        </div>
    )
}
