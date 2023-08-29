import React from "react";
// import pic from '/images/mmmm.jpg';
// import star from '/images/star.png';

export default function Contact(){
    return (
        <div className="contacts">
            <div className="contact--card">
                <img src="/images/mmmm.jpg" alt="contact" className="contact--image" />
                <h5>Mr, Bro Frank.</h5>
                <div className="contact--phone">
                    <img src="/images/star.png" alt="contact" className="contact--info-icon" />
                    <p>(255) 620141577.</p>
                </div>
                <div className="contact--email">
                    <img src="/images/star.png" alt="contact" className="contact--info-icon" />
                    <p>madukapcm@gmail.com.</p>
                </div>
            </div>
        </div>
        
    )
}