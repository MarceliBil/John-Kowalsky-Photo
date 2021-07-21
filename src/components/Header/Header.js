import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {



  const [hide, setHide] = useState(false);
  const [on, setOn] = useState(false);

  let website_width;

  useEffect(() => {
    window.addEventListener("resize", () => {
      website_width = document.body.clientWidth;
    });

    window.addEventListener("scroll", () => {
      setOn(false);
    });

    let prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHide(false);
      } else {
        setHide(true);
      }
      prevScrollpos = currentScrollPos;
    });
  });



  const toggle = () => {
    if (website_width <= 1000) {
      if (on == false) {
        setOn(true);
      } else {
        setOn(false);
      }
    }
  };



  return (
    <header className={`header ${hide && "hide_header"}`}>
      <Link to="/" className="logo_link">
        {" "}
        <StaticImage src="../../images/logo.svg" alt="logo" />
      </Link>

      <nav className={`navigation ${on && "on"}`} onClick={toggle}>
        <ul className="flex_center">
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

          <li>
            <Link to="#contact"> Contact</Link>
          </li>
        </ul>
      </nav>

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

      <StaticImage
        src="../../images/hamburger.png"
        alt="hamburger"
        className="hamburger"
        onClick={toggle}
      />
    </header>
  );
};

export default Header;
