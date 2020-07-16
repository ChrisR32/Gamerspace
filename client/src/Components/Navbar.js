import React, {useContext} from 'react';
import AuthContext from "../Contexts/AuthContext";
import {useHistory} from "react-router-dom";
import Logo from "../Images/logo2.png";
import "./Navbar.css";

export default function MenuAppBar() {
    const history = useHistory();
    const {user, handleLogout} = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const logout = () => {
        handleClose();
        handleLogout();
    };

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogin = () => {
        handleClose();
        history.push('/auth/login');
    };

    const handleRegister = () => {
        handleClose();
        history.push('/auth/register');
    };

    return (
        <div className="navbar">
        <img src={Logo} className="navbar-logo" alt="Gamerspace Logo"/>

        <div className="navbar-list">
            <div className="navbar-item">
                <div className="navbar-div">Home</div>
            </div>
            <div className="navbar-item navbar-submenu-container">
                <div className="navbar-div">Login / Register</div>
                <div className="navbar-submenu">
                    <div className="navbar-submenu-item">
                        <div onClick={handleLogin} className="navbar-submenu-div">Login</div>
                    </div>
                    <div className="navbar-submenu-item">
                        <div onClick={handleRegister} className="navbar-submenu-div">Register</div>
                    </div>
                    <div className="navbar-submenu-item">
                        <div onClick={logout} className="navbar-submenu-div">Logout</div>
                    </div>
                </div>
            </div>
            <div className="navbar-item last-child">
                <div className="navbar-div">Search</div>
            </div>
            
        </div>
    </div>
    );
}
