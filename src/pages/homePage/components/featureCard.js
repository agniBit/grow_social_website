import React from 'react';
import '../css/featureCard.scss';

class FeatureCard extends React.Component{
    render(){
        let bgColor={
            'background-color': this.props.bgColor
        }
        return(
            <div className='featureCard'>
                <div className='cardWraper' style={bgColor}>
                    <div className='HeaderImage'>
                        <img src={this.props.image} alt='feature' />
                    </div>
                    <h1>{this.props.heading}</h1>
                    <h3>{this.props.description}</h3>
                </div>
            </div>
        );
    }
}


export default FeatureCard;