import React from 'react';
import '../css/contactCard.scss'

class ContactCard extends React.Component{
    render(){
        return(
            <div className='contactCard'>
                <div className='logoHead'>
                    <img src={this.props.imageName} alt='conatact' />
                </div>
                <h3>{this.props.heading}</h3>
                <p>{this.props.desc}</p>
                <button className='contactSupportButton'>{this.props.buttonName}</button>
            </div>
        );
    }
}


export default ContactCard;