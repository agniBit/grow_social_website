import * as React from "react";
import '../css/footer.scss'

export default class Footer extends React.Component{
    render() {
        return(
            <div className='footer'>
                <div className='footer_wrapper'>
                    <span>
                        <ul className='services footerContaint'>
                            <li><h4>SERVICES</h4></li>
                            <li>Insta Likes</li>
                            <li>Insta Followers</li>
                            <li>Insta Comments</li>
                        </ul>
                    </span>
                    <span>
                    <ul className='contact_us footerContaint'>
                        <li><h4>COUNTACT US</h4></li>
                        <li>Telegram</li>
                        <li>WhatsApp</li>
                        <li>Gmail</li>
                    </ul>
                    </span>
                    <span>
                    <ul className='downloadAppFooter footerContaint'>
                        <li><h4>DOWNLOAD APP</h4></li>
                        <li>Play Store</li>
                        <li>App store</li>
                        <li>Get Now</li>
                    </ul>
                    </span>
                </div>
                <hr/>
                <div className='copyrights'>
                    <div className='subCopyright'>
                        <span>Copyright © 2021 GrowSocial.com</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Use</span>
                    </div>
                </div>
            </div>
        );
    }
}