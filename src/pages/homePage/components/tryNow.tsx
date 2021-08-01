import * as React from "react";

export default class TryNow extends React.Component{
    render() {
        return(
            <div className='tryNow' id='demo'>
                <h1>Get Demo Now</h1>
                <div className='imageContainer'>
                    <img src='./assets/4.gif' alt='like' />
                    <div className='textBox'>
                        <p>We'll give 30 Followers as demo</p>
                        <p>Using the free Instagram followers trial, you will make sure that:</p>
                        <ul>
                            <li>The Instagram accounts that have many followers are more attractive to future potential followers.</li>
                            <li>Many followers can motivate new viewers to stay on the page and become your followers as well.</li>
                            <li>Your visual content is more competitive and attractive.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}