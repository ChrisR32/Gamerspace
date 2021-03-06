import React from "react";
import ReactContactForm from "react-mail-form";
import "./ContactUs.scss";

export default function Home() {
  return (
    <div className="top-div login-bottom">
      <div className="contact-content">
        <h1>Get in touch</h1>
        <h4>Have a question? Need assistance? We are here to help!</h4>

        <div className="row">
          <div className="contact-view">
            <ReactContactForm
              to="forum_support@gamerspace.online"
              titlePlaceholder="Title"
              contentsRows="6"
              contentsPlaceholder="Contents"
              buttonText="Contact us"
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
