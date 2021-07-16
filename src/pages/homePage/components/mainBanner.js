import React from "react";
import '../css/mainBanner.scss'

function MainBanner() {
    return (
        <div className='mainBanner show-on-scroll' id='home'>
            <div className='bannerBox'>
                <div className='textBox1'>
                    <h1>Get Free Instagram Followers & Likes</h1>
                    <p>Easily get 100% FREE and high-quality Instagram followers and likes. No password. No survey. No risk. 100% real and safe.</p>
                    <div className='buttonWrap'>
                        <button className='p_btn btn1'>Buy Followers Now</button>
                        <button className='p_btn btn2'>Get Free Followers</button>
                    </div>
                </div>
                <div className='bannerImage'>
                    <img src="./assets/why-wedigitalagency.png" alt="imasta likes"/>
                </div>
            </div>
        </div>
    )
};

export default MainBanner;