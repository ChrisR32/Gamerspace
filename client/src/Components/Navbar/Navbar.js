import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../Images/logo.png";

export default function () {
    return (
        <div className="navbar">
            <img src={Logo} className="navbar-logo" alt="Gamerspace Logo"/>
        </div>
    )
}