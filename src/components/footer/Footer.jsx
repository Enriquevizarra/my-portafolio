import React from "react";

import "./footer.css";
import "../../App.css";

function Footer() {
  return (
    <div className="footer" id="projetcs">
      <div className="footer__container container">
        <h1 className="footer__title">Vizarra</h1>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/enriquev.50/"
            className="footer__social-link"
            // target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/enriqueyeferson.vizarramatta/"
            className="footer__social-link"
            // target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        
        <span
          className="footer__copy"
        >
          &#169; Enrique-Vizarra   
        </span>
      </div>
    </div>
  );
}

export { Footer };
