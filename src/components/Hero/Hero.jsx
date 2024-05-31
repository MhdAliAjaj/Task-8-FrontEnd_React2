import React from "react";
import "./../Hero/Hero.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialBehance } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
function Hero() {
  return (
    <div className="MA-Hero-section">
      <div className="MA-hero-top">
        <div className="MA-Hero-Left-text">
          <h1 class="title container">
            Hey !! Mario still here, But don’t forget that
          </h1>
          <p class="content container">
            At focal X agency, we are working to build somthing different. Here
            you’ll have a group of creative people who specialize in:
            <br />
            Branding, Digital Marketing, Web/App Development, Ui/Ux <br />
            Content creation, Graphic design, Social media and More........{" "}
            <br />
            So you can take a tour in our website, OR just
            <span class="bold">Press Start :)</span>
          </p>
        </div>

        <img
          src="./images/hero-image.png"
          className="MA-Right-img"
          alt="hero"
        />

        <div className="MA-Hero-Right-image2">
          <img
            src="./images/hero-right1.png"
            className="MA-Right-img2"
            alt="hero"
          />
        </div>
      </div>

      <div className="MA-hero-buttom">
        <div className="MA-Hero-footer-image">
          <img src="./images/Footer-hero.svg" alt="hero" />
        </div>
        <div className="MA-hero-text-right">
          <p>© 2021 - 2022 focal X agency All Right Reserved</p>
        </div>
        <div className="MA-hero-icon-left">
         <span><FaFacebook className="icone" style={{width:'25px',height:'25px'}} /></span> 
          <span><FaSquareInstagram className="icone" style={{width:'25px',height:'25px'}}/></span>
         <span><FaLinkedinIn className="icone" /></span> 
         <span><SlSocialBehance style={{width:'25px',height:'25px'}}/></span>
         <span><TiSocialTwitter style={{width:'25px',height:'25px'}} /></span>
        </div>
      </div>
    </div>
  );
}
export default Hero;
