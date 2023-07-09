import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/hover.css";

import LogoFooter from "../../assets/svgs/logo.svg";
import EmailImg from "../../assets/svgs/email.svg";
import PhoneImg from "../../assets/svgs/phone.svg";
import GPSImg from "../../assets/svgs/gps.svg";
export default function Footer() {
  return (
    <>
      <div>
        <footer className="footer">
          <p className="footer__licence">Copyright 2020</p>
          <div className="container">
            <div className="footer__content">
              <div className="footer__box">
                <img
                  
                  src={LogoFooter}
                  className="footer__logo"
                  alt="footer logo svg "
                />
                <div className="footer__line" style={{
                  width:"100px"
                }} />
              </div>
              <ul className="footer__list">
                <li className="footer__item">
                  <img className="" src={EmailImg} alt="email icon" />
                  <p className="footer__item-text">
                    willie.jennings@example.com
                  </p>
                </li>
                <li className="footer__item">
                  <img className="" src={PhoneImg} alt="phone icon" />
                  <p className="footer__item-text">(603) 555-0123</p>
                </li>
                <li className="footer__item">
                  <img className="" src={GPSImg} alt="gps icon" />
                  <p className="footer__item-text">
                    8502 Preston Rd. Inglewood, Maine 98380
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
