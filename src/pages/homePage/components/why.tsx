import * as React from "react";
import '../css/why_us.scss';
import FeatureCard from "./featureCard.js";

export default class WhyUs extends React.Component{
    render() {
        return(
            <div className='why_us'>
                <h1>Why choose GrowSocial?</h1>
                <div className='features'>
                    <FeatureCard image='./assets/free.png' heading='100% Free' description='Enjoy 100% free service' bgColor='#86A5FA'/>
                    <FeatureCard image='./assets/original2.png' heading='Real followers' description='Real high quality followers' bgColor='#86FA8C'/>
                    <FeatureCard image='./assets/privacy1.png' heading='Privacy' description='Your data is safe with us' bgColor='#FA86CD'/>
                    <FeatureCard image='./assets/support.png' heading='Privacy' description='Your data is safe with us' bgColor='#C8FA86'/>
                </div>
            </div>
        );
    }
}