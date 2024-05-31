import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialBehance } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
const Footer = () => {
  return (
    <>
      <footer className="footer " id="LetsTalk">
        <div className="footerContent container">
          <div className="headOffice">
            <div className="focalAgency">
              <img src="./images/logo.svg" alt="logo" />
              <span>.agency</span>
            </div>
            <h3>Head Office</h3>
            <p>Syria - Latakia - grh2+hjx</p>
            <span> 35.5199518</span>
          </div>
          <div>
            <h3>Sales</h3>
            <p>contact@focal-x.com</p>
            <a href="tel:+963 953 666 056">+963 953 666 056</a>
            <h3>Public Relations</h3>
            <p>pr@focal-x.com</p>
            <a href="tel:+963 953 666 052">+963 953 666 052</a>
          </div>
          <div>
            <h3>Customer Support</h3>
            <p>info@focal-x.com</p>
            <a href="tel:+963 953 666 054">+963 953 666 054</a>
            <h3>Human Resources</h3>
            <p>hr@focal-x.com</p>
          </div>
          <div>
            <h3>Useful Links</h3>
            <ul className="UsefulLinks">
              <li>Clients & Partners</li>
              <li>Check Certificat ID</li>
              <li>Check for employee</li>
              <li>Our Brand ID guidlines</li>
            </ul>
          </div>
          <div className="keepInTouch">
            <h3>Keep In Touch</h3>
            <div className="icons">
              <span>
                <FaFacebook
                  className="icone"
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
              <span>
                <FaSquareInstagram
                  className="icone"
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
              <span>
                <FaLinkedinIn className="icone" />
              </span>
              <span>
                <SlSocialBehance style={{ width: "25px", height: "25px" }} />
              </span>
              <span>
                <TiSocialTwitter style={{ width: "25px", height: "25px" }} />
              </span>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <p> &copy; 2021 - 2023 focal X L.L.C All Right Reserved</p>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
