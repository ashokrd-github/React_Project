import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Makhan.css";
import logo from "./ashokrd1.jpg";
import service2 from './service2.png'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {faCode } from "@fortawesome/free-solid-svg-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Makhan() {
  return (
    <div>
      <header className="header">
        <a href="#portfolio" className="logo">
          Portfolio
        </a>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h2>Hello, It's me</h2>
          <h1>Yaduvanshi Ashok RD</h1>
          <h2>
            And I'm a <span>Frontend Developer</span>{" "}
          </h2>

          <p>
            I am currently Pursuing Bachelor of Computer Application From
            Maharishi University of information technology Lucknow,
            <br /> and I am currently working on Fronted Development by
            CodeAlpha
          </p>

          <div className="social-media">
            <a href="#instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#TwitterX">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <a href="#button" className="btn">
            Download CV
          </a>
        </div>
        <div className="home-photo">
          <img src={logo} alt="userPhotos" className="logo" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={logo} alt="photos" className="about_img" />
        </div>
        <div className="about-content">
          <h1>
            About <span>me!</span>
          </h1>
          <h3>Frontend Developer</h3>
          <p>
            Hello, I am from Shravasti Uttar Pradesh and I am currently pursuing
            Bachelor of Computer Application from Maharishi University of
            information technology Lucknow 226013. And I am currently working on
            Frontend Developer from CodeAlpha, and my favorite Technology in
            programming React.js and I love React.js and i want to learn more to
            more React js
          </p>
          <a href="#more" className="btn">
            Read More
          </a>
        </div>
      </section>

      {/* Services section implemented */}
      <section className="services" id="services">
        <h1>
          Our <span>Services</span>
        </h1>
        <div className="service-content">
          {
            (Array(3).
            fill("").map((item, index) => (
              <div className="services3" key={index}>
                <a href="#bar" className="code">
                  <FontAwesomeIcon icon={faCode} />
                </a>
                <h2>Digital Marketing</h2>
                <p>
                  Web Development is very difficult and very easiest Problem But
                  if you want ot create some website or webpage then you will be
                  learn more to more about HTML, CSS, and React.js and
                  Javascript
                </p>
                <a href="#read" className="btn">Read More</a>
              </div>
            )))
          }
        </div>
      </section>

      {/* Portfolio section implement */}
      <section className="portfolio" id="portfolio">
        <h1>Latest <span> Project </span> </h1>
        <div className="portfolio-container">
            {
              (Array(6).fill("").map((item, index) =>(

                <div className="portfolio-box" key={index}>
              <img src={service2} alt="service"/>
              <div className="portfolio-caption">
                <h3>Web Development</h3>
                <p>Hello, I am from Maharishi university of information technology Lucknow from Uttar Pradesh Jai shree Ram</p>
              </div>
            </div>
              )))
            }
            
        </div>
      </section>
    </div>
  );
}
export default Makhan;
