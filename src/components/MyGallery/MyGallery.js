import React from 'react';
import "./MyGallery.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


const MyGallery = () => {

  return (
    <section className="section my_gallery flex_center" id="my_gallery">
      <div className="section_content flex_center">
        <h3>Some of my photos:</h3>
        <div className="gallery_grid">

          <StaticImage src="../../images/1.png" className="one photo"></StaticImage>
          <StaticImage src="../../images/2.png" className="two photo"></StaticImage>
          <StaticImage src="../../images/3.png" className="three photo"></StaticImage>
          <StaticImage src="../../images/4.png" className="four photo"></StaticImage>
          <StaticImage src="../../images/5.png" className="five photo"></StaticImage>
          <StaticImage src="../../images/6.png" className="six photo"></StaticImage>
          <StaticImage src="../../images/7.png" className="seven photo"></StaticImage>
          <StaticImage src="../../images/8.png" className="eight photo"></StaticImage>



        </div>
      </div>

      <Link to="#contact" className="check_out_link flex_center">
        <p> feel free to contact me</p>{" "}
        <StaticImage src="../../images/arrow_down.png"></StaticImage>
      </Link>
    </section>
  );
};

export default MyGallery;
