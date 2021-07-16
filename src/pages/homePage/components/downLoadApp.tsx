import * as React from "react";
import '../css/downloadApp.scss'

export default class DownloadApp extends React.Component{
    render() {
        return(
            <div className='download_app' id='downloadApp'>
                <h1>Download GrowSocial App</h1>
                <div className='download_wrapper'>
                    <div className='igContainer'>
                        <img src='./assets/app3.png' alt='app' />
                    </div>
                    <div className='descBox'>
                        <h3>Download the safe app GetInsta now to get high-quality Instagram followers free. No drop is guaranteed.</h3>
                        <button className='p_btn'>Get App Now</button>
                    </div>
                </div>
            </div>
        );
    }
}