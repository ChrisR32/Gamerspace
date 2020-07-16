import React, {useState} from 'react';
import validator from "validator";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";
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
import TitleImg from "../../Images/register3.png";
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

export default function Register() {
    const classes = useStyles();

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
                        label="Name"
                        autoFocus
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        label="Email Address"
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
                    <TextField
                        required
                        fullWidth
                        label="Password Confirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
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