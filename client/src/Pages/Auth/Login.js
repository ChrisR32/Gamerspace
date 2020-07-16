import React, {useState, useContext} from 'react';
import AuthContext from "../../Contexts/AuthContext";
import axios from "axios";
import {useHistory} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TitleImg from "../../Images/login.png";
import "./Auth.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
    const history = useHistory();
    const {setUser} = useContext(AuthContext);
    const classes = useStyles();
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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                <img src={TitleImg} className="title-logo" alt="Gamerspace Logo"/>
                </Typography>
                <form className={classes.form} onSubmit={handleOnSubmit}>
                    <TextField
                        required
                        fullWidth
                        label="Email Address"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={!!emailError}
                        helperText={emailError}
                    />
                    <TextField
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}