import React from 'react';
import { TwitterShareButton } from 'react-share';




const Button = (props)=>(
<div className="btn">
    <TwitterShareButton url={window.location.href}  title={props.children} via="_nerdyjoe">
        <button className="twitter-button">
            <i class="fab fa-twitter"></i>
        </button>
    </TwitterShareButton>
    <button id="new-quote" onClick={props.handleClick}>New Joke</button>
</div>
);
export default Button;