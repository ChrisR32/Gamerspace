import React from "react";
import ReactContactForm from 'react-mail-form';
import "./ContactUs.scss";

export default function Home() {
    return (
        <div className="top-div login-bottom">
                    <div className="main-content">
            <h1>Contact us</h1>
            <div className="row">
            
            <div className="view">
            <ReactContactForm to="morriscnm@hotmail.com"
            titlePlaceholder="Title"
            contentsRows="6"
            contentsPlaceholder="Contents"
            buttonText="Send" />
</div>
</div>
</div>
        </div>
    )
}