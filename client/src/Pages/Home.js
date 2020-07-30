
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.scss";
import SlideOne from "../Images/slide1.png";
import SlideTwo from "../Images/slide2.png";
import SlideThree from "../Images/slide3.png";
import SlideFour from "../Images/slide4.png";
import SlideFive from "../Images/slide5.png";
import SlideSix from "../Images/slide6.png";

export default function Home() {
  return (
    <div className="top-div login-bottom">
      <div className="main-content">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 home-content">
            <Carousel
              autoPlay
              interval="10000"
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              showIndicators={false}
              className="home-border"
            >
              <div>
                <img src={SlideOne} alt="" />
                <p className="home-info">
                  Login{" "}
                  <a href="/auth/login" class="strong home-slide">
                    here
                  </a>
                  &nbsp;&nbsp;New to Gamerspace? Register{" "}
                  <a href="/auth/register" class="strong home-slide">
                    here
                  </a>
                </p>
              </div>
              <div>
                <img src={SlideTwo} alt="" />
                <p className="home-info">
                  Connect with us{" "}
                  <a href="/contact" class="strong home-slide">
                    here
                  </a>
                </p>
              </div>
              <div>
                <img src={SlideThree} alt="" />
                <p className="home-info">
                  Stay informed{" "}
                  <a href="/rules" class="strong home-slide">
                    here
                  </a>
                </p>
              </div>
              <div>
                <img src={SlideFour} alt="" />
                <p className="home-info">
                  Get rewarded{" "}
                  <a href="/news" class="strong home-slide">
                    here
                  </a>
                </p>
              </div>
              <div>
                <img src={SlideFive} alt="" />
                <p className="home-info">
                  Start browsing{" "}
                  <a href="/category" class="strong home-slide">
                    here
                  </a>
                </p>
              </div>
              <div>
                <img src={SlideSix} alt="" />
                <p className="home-info">
                  Discover exclusive content{" "}
                  <a href="/news" class="strong home-slide">
                    here
                  </a>
                </p>
              </div>
            </Carousel>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
