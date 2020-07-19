import React, {useState} from 'react';
import validator from "validator";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";
import "./Auth.scss";
import "./Auth.css";
import 'bootstrap';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleOnSubmit = async event => {
        event.preventDefault();
        setEmailError(null);
        setPasswordError(null);
        let errors = 0;

        if (!validator.isEmail(email))
        {
            setEmailError("Email must be in correct format");
            errors++;
        }

        if (password !== passwordConfirmation) {
            setPasswordError("Passwords don't match.");
            errors++;
        }

        if (errors) return;

        const data = {
            name,
            email,
            password
        };

        try {
            await axios.post("/api/auth/register", data);
        } catch (e) {
            const message = e.response.data.message;
            if (message === "email_exists") {
                setEmailError("User with this email already exists");
            }
        }
    };

    return (
        <div className="top-div login-bottom">        
        <h1>register</h1>
                <form className="login-forum" onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label for="name-input">User Name</label>
                            <input className="form-control form-control-lg"
                                itemID="name-input"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    <div className="form-group">
                        <label for="email-input">Email Address</label>
                            <input className="form-control form-control-lg"
                                itemID="email-input"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                error={!!emailError}
                                helperText={emailError}
                            />
                    </div>
                    <div className="form-group">
                        <label for="password-input">Password</label>
                        <input className="form-control form-control-lg"
                        itemID="password-input"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                    </div>
                    <div className="form-group">
                    <label for="password-again-input">Confirm Password</label>
                        <input className="form-control form-control-lg"
                            itemID="password-again-input"
                            type="password"
                            value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </div>
                    <br/>
                    <div class="wrap">
                        <button
                        type="submit"
                        className="submit btn btn-primary btn-lg btn-block"
                        >
                        Register
                    </button>
                    </div>
                </form>
            </div>
  

    );
}