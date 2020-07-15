import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../Images/logo.png";
import {Link} from "react-router-dom";

export default function () {
    return (
        <div className="navbar">
            <img src={Logo} className="navbar-logo" alt="Gamerspace Logo"/>

            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item navbar-submenu-container">
                    <div className="navbar-link">Login / Register</div>
                    <ul className="navbar-submenu">
                        <li className="navbar-submenu-item">
                            <Link to="/auth/login" className="navbar-submenu-link">Login</Link>
                        </li>
                        <li className="navbar-submenu-item">
                            <Link to="/auth/register" className="navbar-submenu-link">Register</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}