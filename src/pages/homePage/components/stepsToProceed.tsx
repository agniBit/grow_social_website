import * as React from "react";
import '../css/stepsToProceed.scss'

export default class Steps extends React.Component{
    render() {
        return(
            <div className='steps' id='likesAndfolliwers'>
                <h1>How to get free Likes and Followers</h1>
                <div className='wrap'>
                    <div className='imageBox'>
                        <img src='./assets/faster.png' alt='super fast' />
                    </div>
                    <div className='contant'>
                        <h3>We provide unlimited free Instagram followers and free Instagram likes. It’s totally free for you. Getting free Instagram followers & likes with GetInsta is as simple as ABC.</h3>
                        <button>Get Free Likes</button>
                    </div>
                </div>
            </div>
        );
    }
}