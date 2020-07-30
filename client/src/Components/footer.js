import React, { useContext } from "react";
import FooterImg from "../Images/ducko.gif";
import FooterLogo from "../Images/logo5.png";
import "./footer.scss";
import "bootstrap";
export default function Footer() {
  return (
    <footer class="main-footer text-white">
      <div class="container">
        <div class="row text-center align-items-center">
          <div class="col-12 col-md mb-1 mb-md-0">
            <a href="/news" class="text-uppercase strong">
              NEWSLETTER
            </a>
          </div>

          <div class="col-12 col-md mb-1 mb-md-0">
            <a href="/rules" class="text-uppercase strong">
              FORUM RULES
            </a>
          </div>

          <div class="d-none d-md-block" aria-hidden="true">
            <div class="logo__container">
              <span id="logo">
                <img
                  src={FooterImg}
                  className="footer-logo"
                  alt="Gamerspace Logo"
                />
              </span>
            </div>
          </div>

          <div class="col-12 col-md mb-1 mb-md-0">
            <a href="/about" class="text-uppercase strong">
              ABOUT US
            </a>
          </div>
          <div class="col-12 col-md mb-1 mb-md-0">
            <a href="/contact" class="text-uppercase strong">
              CONTACT US
            </a>
          </div>
        </div>

        <div class="row my-4 my-md-5">
          <div class="col-12 d-flex justify-content-center">
            <img
              src={FooterLogo}
              className="footer-name"
              alt="Gamerspace Logo"
            />
          </div>
        </div>
      </div>

      <div class="lower-footer">
        <div class="container mt-3 mt-md-5 py-3">
          <div class="row">
            <small class="col-12 col-md-12 text-center">
              <a href="#">&copy; Copyright 2020</a> | website developed by{" "}
              <a href="https://github.com/ChrisR32">Christopher Morris</a> and{" "}
              <a href="https://github.com/mmolloy88">Matthew Molloy</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
