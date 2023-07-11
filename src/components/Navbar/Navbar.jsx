import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// react-bootstrap.netlify.app/docs/components/offcanvas/
// https:
import FaceIco from "../../assets/svgs/facebook.svg";
import InsIco from "../../assets/svgs/instagram.svg";
import Logo from "../../assets/svgs/header-btn.svg";
import LogoSVG from "../../assets/svgs/logo.svg";
import "../../assets/css/style.css";
import "../../assets/css/hover.css";
// import "../../assets/css/offcanvas.css"

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <header className="header">
          <div className="container">
            <nav className="header__nav">
              <div className="header__box">
                <ul className="header__social wrapper ">
                  <li class="icon facebook">
                    <span class="tooltip">Facebook</span>

                    <span>
                      <img width="25px" src={FaceIco} alt="LogoFaceBook" />
                    </span>
                  </li>
                  <li class="icon instagram">
                    <span class="tooltip">Instagram</span>

                    <span>
                      <img width="25px" src={InsIco} alt="LogoInstagram" />
                    </span>
                  </li>
                </ul>
                <div className="header__content">
                  <img src={LogoSVG} className="header__logo" />
                  <div className="header__logo-before" />
                </div>
              </div>
              {/* <button className="header__btn">
                <img src={Logo} alt="header-btn" />
              </button> */}
              <Button onClick={handleShow} className="BtnOffCanvas">
                <img src={Logo} alt="header-btn" />
              </Button>

              <div
                style={{
                  backgroundColor: "rgb(14,27,27)",
                }}
              >
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header
                    closeButton
                    style={{
                      backgroundColor: "rgb(14,27,27)",
                    }}
                  >
                    <Offcanvas.Title
                      style={{
                        color: "rgb(211, 226, 226)",
                      }}
                    >
                      Hello :)
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body
                    style={{
                      backgroundColor: "rgb(14,27,27)",
                    }}
                  >
                    <a className="OffCanvasLink" href="#dna">
                      Our DNA
                    </a>
                    <br />
                    <a className="OffCanvasLink" href="#work">
                      Select Work
                    </a>
                    <br />
                    <a className="OffCanvasLink" href="#whyus">
                      Why Us
                    </a>
                    <br />
                    <a className="OffCanvasLink" href="#blogs">
                      Lataste Blogs
                    </a>
                    <br />
                    <a className="OffCanvasLink" href="#clienst">
                      Our Clients
                    </a>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
