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
                        <ContactCard imageName='./assets/call.svg' heading='Call' desc='Call our sales team' buttonName='Call' href="tel:917820961924"/>
                        <ContactCard imageName='./assets/WA.svg' heading='whatsapp' desc='Message us on Whatsapp' buttonName='whatsapp' href='https://www.instagram.com/mr.agni/' />
                    </div>
                    <div className='breakContact'>
                        <ContactCard imageName='./assets/telegram.svg' heading='Telegram' desc='Contact us on Telegram' buttonName='Telegram' href='https://t.me/GrowInsta01'/>
                        <ContactCard imageName='./assets/message.svg' heading='Message' desc='Drop a message now' buttonName='Message' href='/'/>                 
                    </div>   
                </div>
            </div>
        );
    }
}