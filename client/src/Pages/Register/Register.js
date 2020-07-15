import React, { useState } from 'react';
import FormErrors from '../../Components/FormErrors/FormErrors';
import validator from "validator";
import Button from "../../Components/Button/Button";

export default function () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmit = async event => {
        event.preventDefault();
        let _errors = [];
        setErrors([]);

        if (!name) _errors.push("A username is required");
        if (!email) _errors.push("A email is required");
        else if (!validator.isEmail(email)) _errors.push("Email must be in correct format");
        if (!password) _errors.push("A password is required");
        if (!passwordAgain) _errors.push("Password confirmation is required");
        else if (password !== passwordAgain) _errors.push("Passwords do not match");
        if (_errors.length) return setErrors(_errors);

    };

    return (
        <div className="page">
            <h1 className="page-title">Register</h1>

            <div className="form">
                {!!errors.length && <FormErrors errors={errors} />}
                <div className="form-group">
                    <label className="form-label">User Name</label>
                    <input type="text"
                            className="form-input"
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-group mb-1">
                        <label className="form-label">Your Email</label>
                        <input className="form-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text"/>
                    </div>
                    <div className="form-group mb-1">
                        <label className="form-label">Password</label>
                        <input className="form-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"/>
                    </div>
                    <div className="form-group mb-1">
                        <label className="form-label">Password Confirmation</label>
                        <input className="form-input"
                            value={passwordAgain}
                            onChange={e => setPasswordAgain(e.target.value)}
                            type="password"/>
                    </div>
                    <Button type="submit" className="btn--primary">Register</Button>
                </div>
            </div>
    )
}