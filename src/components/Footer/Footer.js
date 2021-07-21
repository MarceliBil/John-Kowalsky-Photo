import * as React from "react";
import "./Footer.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer_top">
        <div className="left">
          <h3>
            If you want to cooperate or have any questions - feel free to
            contact me!
          </h3>

          <p className="contact_data">
            phone: <br />
            <strong>123-456-789</strong>
          </p>

          <p className="contact_data">
            email: <br />
            <strong>contac@mail.com</strong>
          </p>
        </div>

        <form action="" className="contact_form ">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name..."
            maxLength="25"
            spellCheck="false"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email..."
            maxLength="25"
            spellCheck="false"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="message..."
            cols="30"
            rows="5"
            spellCheck="false"
            maxLength="255"
            required
          ></textarea>

          <div className="btn">
            <button>let's work together</button>
          </div>
        </form>
      </div>

      <div className="footer_bottom">
        <div className="left">
          <div className="social_links flex_center">
            <a href="https://www.behance.net" target="_blank">
              <StaticImage src="../../images/behance.svg" alt="Behance" />
            </a>

            <a href="https://www.linkedin.com" target="_blank">
              <StaticImage src="../../images/linkedin.svg" alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <StaticImage src="../../images/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.pinterest.com" target="_blank">
              <StaticImage src="../../images/pinterest.svg" alt="Pinterest" />
            </a>
          </div>
          <p className="copyright">
            &copy;2021. Marceli Bil. All rights reserved.
          </p>
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <Link to="#start">Start</Link>
            </li>

            <li>
              <Link to="#about_me">About me</Link>
            </li>

            <li>
              <Link to="#my_services">My services</Link>
            </li>

            <li>
              <Link to="#my_gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
