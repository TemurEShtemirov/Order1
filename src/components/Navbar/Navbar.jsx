import React from "react";
import FaceIco from "../../assets/svgs/facebook.svg";
import InsIco from "../../assets/svgs/instagram.svg";
import Logo from "../../assets/svgs/logo.svg";
import "../../assets/css/style.css";
import "../../assets/css/hover.css"


export default function Navbar() {
  return (
    <>
      <div>
        <header
          className="header">
          <div className="container">
            <nav className="header__nav">
              <div className="header__box">
                <ul className="header__social wrapper ">
                  <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    {/* <span>
                      <i class="fab fa-facebook-f"></i>
                    </span> */}
                    <span>
                      <img width="25px" src={FaceIco} alt="LogoFaceBook" />
                    </span>
                  </li>
                  <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    {/* <span>
                      <i class="fab fa-instagram"></i>
                    </span> */}
                    <span>
                      <img width="25px" src={InsIco} alt="LogoInstagram" />
                    </span>
                  </li>
                </ul>
                <div className="header__content">
                  <img src="./assets/svgs/logo.svg" className="header__logo" />
                  <div className="header__logo-before" />
                </div>
              </div>
              <button className="header__btn">
                <img src={Logo} alt="header-btn" />
              </button>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
