import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Logo from "../Images/login4.png";
import "./Navbar.scss";
import "bootstrap";

export default function MenuAppBar() {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const logout = () => {
    handleClose();
    handleLogout();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleClose();
    history.push("/auth/login");
  };

  const handleRegister = () => {
    handleClose();
    history.push("/auth/register");
  };

  return (
    <div className="page-header js-page-header">
      <div className="metabar bg-gradient">
        <div className="navbar-expand-lg navbar--header p-0 js-header d-flex flex-wrap align-items-center justify-content-between">
          <div className="container d-flex flex-wrap align-items-center justify-content-between">
            <img src={Logo} className="navbar-logo" alt="Gamerspace Logo" />

            <div className="d-flex h-100">
              <div className="nav-sidebar" id="globalNavbar">
                <button
                  className="navbar-toggler navbar-toggler--bar"
                  aria-controls="globalNavbar"
                  aria-label="Toggle navigation"
                >
                  <i className="icon icon-close"></i>
                </button>

                <ul className="navbar-nav ml-lg-auto">
                  <li className="nav-item  ">
                    <a className="nav-link " href="/" target="">
                      Home
                    </a>
                  </li>

                  <li className="nav-item  ">
                    <a className="nav-link " href="/category/" target="">
                      Forum
                    </a>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link " href="/contact" target="">
                      Contact
                    </a>
                  </li>

                  <li className="nav-item  dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown-0000000000bd21cd000000004e22ffb4"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="#"
                    >
                      Account
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown-0000000000bd21cd000000004e22ffb4"
                    >
                      <a className="dropdown-item" onClick={handleLogin}>
                        Login
                      </a>

                      <div className="dropdown-divider"></div>

                      <a className="dropdown-item" onClick={handleRegister}>
                        Register
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" onClick={handleRegister}>
                        Profile
                      </a>

                      <div className="dropdown-divider"></div>

                      <a className="dropdown-item" onClick={logout}>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
