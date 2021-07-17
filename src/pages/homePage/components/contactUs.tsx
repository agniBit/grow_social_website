import * as React from "react";
import ContactCard from "./contactCard";
import '../css/contactUs.scss'

export default class ContactUS extends React.Component{
    render() {
        return(
            <div className='contactUs' id='contactUs'>
                <h1>Contact US</h1>
                <div className='contactUsWraper'>
                    <div className='breakContact'>
                        <ContactCard imageName='./assets/call.svg' heading='Call' desc='Call our sales team' buttonName='Call' />
                        <ContactCard imageName='./assets/WA.svg' heading='whatsapp' desc='Message us on Whatsapp' buttonName='whatsapp' />
                    </div>
                    <div className='breakContact'>
                        <ContactCard imageName='./assets/telegram.svg' heading='Telegram' desc='Contact us on Telegram' buttonName='Telegram' />
                        <ContactCard imageName='./assets/message.svg' heading='Message' desc='Drop a message now' buttonName='Message' />                 
                    </div>   
                </div>
            </div>
        );
    }
}