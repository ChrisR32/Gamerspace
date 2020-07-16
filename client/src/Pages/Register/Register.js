import React, { useState } from 'react';
import FormErrors from '../../Components/FormErrors/FormErrors';
import validator from "validator/es";
import Button from "../../Components/Button/Button";
import axios from "axios";
import {useHistory} from 'react-router-dom';

export default function () {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmit = async event => {
        event.preventDefault();
        setErrors([]);
        let _errors = [];
       

        if (!name) _errors.push("A username is required");
        if (!email) _errors.push("A email is required");
        else if (!validator.isEmail(email)) _errors.push("Email must be in correct format");
        if (!password) _errors.push("A password is required");
        if (!passwordAgain) _errors.push("Password confirmation is required");
        else if (password !== passwordAgain) _errors.push("Passwords do not match");

        if (_errors.length) return setErrors(_errors);

        const data ={
            name,
            email,
            password
        };

        try {
            await axios.post('/api/user/register', data);
            history.push('/auth/login');
        } catch (e) {
            setErrors([e.response.data.message]);
        }
    }; 

    return (
        <div className="page">
            <h1 className="page-title">Register</h1>

            <form onSubmit={onSubmit} className="form">
                {!!errors.length && <FormErrors errors={errors} />}
                <div className="form-group">
                    <label className="form-label">User Name</label>
                    <input type="text"
                            className="form-input"
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input type="text"
                            className="form-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password"
                            className="form-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password Confirmation</label>
                        <input type="password"
                            className="form-input"
                            value={passwordAgain}
                            onChange={e => setPasswordAgain(e.target.value)}/>
                    </div>
                    <Button type="submit" className="btn">Register</Button>
                </form>
            </div>
    )
}
