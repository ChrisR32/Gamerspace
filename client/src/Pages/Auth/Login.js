import React, {useState, useContext} from 'react';
import AuthContext from "../../Contexts/AuthContext";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./Auth.scss";
import "./Auth.css";
import 'bootstrap';


export default function SignIn() {
    const history = useHistory();
    const {setUser} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);

    const handleOnSubmit = async e => {
        e.preventDefault();
        setEmailError(null);
        setPasswordError(null);

        const data = {
            email,
            password
        };

        try {
            const response = await axios.post('/api/auth/login', data);
            const {token, user} = response.data;
            localStorage.setItem("token", token);
            setUser(user);
            history.push('/');
        } catch (e) {
            const message = e.response.data.message;
            if (message === 'user_not_found') {
                setEmailError('No users with this email were found');
            } else if (message === 'wrong_password') {
                setPasswordError('Wrong password')
            }
        }

    };

    return (
        
        
   <div className="top-div login-bottom">        
        <h1>login</h1>

                <form onSubmit={handleOnSubmit} className="login-forum">  
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
                    <br/>
                    <div class="wrap">
                    <button
                        type="submit"
                            className="btn btn-primary btn-lg btn-block"
                        
                    >
                        Sign In
                    </button>
</div>
                </form>

                
        </div>

    );
}