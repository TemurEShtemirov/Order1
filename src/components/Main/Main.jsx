import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/hover.css";
import "../../assets/css/slider.css";
import OurProduct from "../../assets/imgs/our.png";
import HeroImg from "../../assets/imgs/hero.png";
import WorkImg from "../../assets/imgs/work-1.png";
import Work2Img from "../../assets/imgs/work-2.png";
import EcoImg from "../../assets/svgs/eco.svg";
import HardImg from "../../assets/svgs/hard.svg";
import SupportImg from "../../assets/svgs/support.svg";
import BlogsImg from "../../assets/imgs/blogs-1.png";
import Blogs2Img from "../../assets/imgs/blogs-2.png";
import Blogs3Img from "../../assets/imgs/blogs-3.png";
import AmazonIco from "../../assets/svgs/amazon.svg";
import BeIco from "../../assets/svgs/behance.svg";
import GoogleIco from "../../assets/svgs/google.svg";
import LinkedinIco from "../../assets/svgs/linkedin.svg";
export default function Main() {
  return (
    <>
      <div>
        <main>
          {/* Hero Section */}
          <section className="hero">
            <div className="container">
              <div className="hero__img-box">
                {/* <img src={HeroImg} alt="hero image" className="hero__img " /> */}

                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={HeroImg}
                        className="d-block w-100 hero__img"
                        alt={HeroImg}
                      />
                    </div>
                    <div className="carousel-item">
                      <img width="100%"
                        src={WorkImg}
                        className="d-block w-100 hero__img"
                        alt={WorkImg}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={HeroImg}
                        className="d-block w-100 hero__img"
                        alt={HeroImg}
                      />
                    </div>
                  </div>
                </div>

                <p className="hero__one">01</p>
              </div>
              <div className="hero__box">
                <h1 className="hero__title">Architecture Studio</h1>
              </div>
            </div>
          </section>
          {/* Our section */}
          <section className="our" id="dna">
            <div className="container">
              <img src={OurProduct} className="our__img " alt="our image" />
              <div className="our__box">
                <h2 className="our__title">Our DNA</h2>
                <p className="our__desc">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                  tellus ultricies velit elementum ut dui sed augue ultrices
                  phasellus <span> ullamcorper condimentum </span> ut
                  suspendisse viverra ornare sit venenatis
                </p>
                <p className="our__text">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                  tellus ultricies velit
                </p>
                <button className="our__btn">Read More</button>
              </div>
            </div>
          </section>
          {/* Work section */}
          <section className="work" id="work">
            <div className="container">
              <h2 className="work__title">Selected Work</h2>
              <p className="work__text">
                Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                tellus ultricies velit elementum ut dui sed augue ultrices
                phasellus ullamcorper condimentum ut suspendisse viverra ornare
                sit venenatis
              </p>
              <div className="work__box">
                <div className="work__img-box">
                  <p className="work__one">01</p>
                  <div className="work__images">
                    <img src={WorkImg} className="work__img-one " alt />
                    <div
                      className="slider"
                      style={{
                        marginTop: " -148px",
                        marginLeft: "-140px",
                      }}
                    >
                      <div className="slides">
                        <div className="slide-1" id="slide-1">
                          <img
                            src={Work2Img}
                            className="work__img-two carusel "
                            alt
                          />
                        </div>
                        <div className="slide-2" id="slide-2">
                          <img
                            src={WorkImg}
                            className="work__img-one carusel"
                            alt=""
                          />
                        </div>
                      </div>
                      <a href="#slide-1">1</a>
                      <a href="#slide-2">2</a>
                    </div>
                  </div>
                </div>
                <div className="work__content">
                  <p className="work__header">Louis Vuitton</p>
                  <p className="work__desc">
                    Amet eu facilisi posuere ut at cras non ipsum proin nunc
                    purus tellus ultricies velit elementum ut dui sed augue
                    ultrices phasellus ullamcorper condimentum ut suspendisse
                    viverra ornare sit venenatis
                  </p>
                </div>
              </div>
              <div className="work__btns">
                <button className="work__btn">View Case</button>
                <div className="work__swiper-btns"></div>
              </div>
            </div>
          </section>
          {/* Why us section */}
          <section className="why-us" id="whyus">
            <div className="container">
              <div className="why-us__card">
                <p className="why-us__text">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                  tellus ultricies velit elementum ut dui sed augue ultrices
                  phasellus ullamcorper condimentum ut suspendisse viverra
                  ornare sit venenatis
                </p>
              </div>
              <div className="why-us__black-card">
                <div className="why-us__box">
                  <h3 className="why-us__title">Why Us</h3>
                  <p className="why-us__desc">
                    Amet eu facilisi posuere ut at cras non ipsum proin nunc
                    purus tellus ultricies velit elementum ut dui sed augue
                    ultrices phasellus <span> ullamcorper condimentum </span> ut
                    suspendisse viverra ornare sit venenatis
                  </p>
                  <ul className="why-us__list">
                    <li className="why-us__item">
                      <img src={EcoImg} alt="eco icon" className="" />
                      <p className="why-us__item-text">eco friendly</p>
                    </li>
                    <li className="why-us__item">
                      <img src={HardImg} alt="hard icon" className="" />
                      <p className="why-us__item-text">hard working</p>
                    </li>
                    <li className="why-us__item">
                      <img src={SupportImg} alt="support icon" className="" />
                      <p className="why-us__item-text">24/7 Support</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Blogs section */}
          <section className="blogs" id="blogs">
            <div className="container">
              <h3 className="blogs__title">Lataste Blogs</h3>
              <ul className="blogs__list row">
                <li className="blogs__item col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3 ">
                  <p className="blogs__intirior">Intirior</p>
                  <img src={BlogsImg} alt="blogs first image" className="" />
                  <div className="blogs__box">
                    <p className="blogs__text">
                      Amet eu facilisi posuere ut at cras non ipsum proin
                    </p>
                  </div>
                </li>
                <li className="blogs__item col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3 ">
                  <p className="blogs__intirior">Intirior</p>
                  <img src={Blogs2Img} alt="blogs second image" className="" />
                  <div className="blogs__box">
                    <p className="blogs__text">
                      Emu facilisi posuere ut at cras non ipsum proin
                    </p>
                  </div>
                </li>
                <li className="blogs__item col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3 ">
                  <p className="blogs__intirior">Intirior</p>
                  <img src={Blogs3Img} alt="blogs thirt image" className="" />
                  <div
                    className="blogs__box"
                    style={{
                      width: "370px",
                    }}
                  >
                    <p className="blogs__text ">
                      Fasacilisi posuere ut at cras non ipsum proin
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* Clients section */}
          <section className="clients" id="clienst">
            <div className="container">
              <div className="clients__content">
                <div className="clients__list">
                  <img
                    width="80px"
                    src={AmazonIco}
                    alt="amazon icon"
                    className="ImgHovers"
                  />
                  <img
                    width="80px"
                    src={BeIco}
                    alt="be icon"
                    className="ImgHovers"
                  />
                  <img
                    src={GoogleIco}
                    width="70px"
                    alt="google icon"
                    className="ImgHovers"
                  />
                  <img
                    width="70px"
                    src={LinkedinIco}
                    alt="linkedin icon"
                    className="ImgHovers"
                  />
                </div>
                <h3 className="clients__title">Our Clients</h3>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
