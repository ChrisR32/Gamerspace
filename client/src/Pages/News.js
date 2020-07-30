import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import "bootstrap";
import "./News.scss";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const history = useHistory();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setEmailError(null);
    let errors = 0;

    if (!validator.isEmail(eMail)) {
      setEmailError("Email must be in correct format");
      errors++;
    }

    if (errors) return;

    const data = {
      firstName,
      lastName,
      eMail,
    };

    try {
      await axios.post("/api/news/register", data);
      history.push("/");
    } catch (e) {
      const message = e.response.data.message;
      if (message === "email_exists") {
        setEmailError("User with this email already exists");
      }
    }
  };

  return (
    <div className="top-div-news login-bottom">
      <h1 className="center-text">Exclusive offers in your inbox</h1>
      <h4 className="center-text">
        <strong>
          Subscribe today to recieve offers avaliable only to our subscribers.
        </strong>
      </h4>
      <form className="news-forum" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label for="name-input">First Name</label>
          <input
            className="form-control form-control-lg"
            itemID="firstName-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="name-input">Last Name</label>
          <input
            className="form-control form-control-lg"
            itemID="firstName-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="email-input">Email Address</label>
          <input
            className="form-control form-control-lg"
            itemID="email-input"
            value={eMail}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
        </div>
        <br />
        <div class="wrap">
          <button
            type="submit"
            className="submit btn btn-primary btn-lg btn-block"
          >
            Subscribe
          </button>
        </div>
      </form>
      <p className="center-text">You can unsubscribe at anytime</p>
    </div>
  );
}
