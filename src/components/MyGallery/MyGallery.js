import React from 'react';
import "./MyGallery.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const MyGallery = () => {

  return (
    <section className="section my_gallery flex_center" id="my_gallery">
      <div className="section_content flex_center">
        <h3>Some of my photos:</h3>
        <div className="gallery_grid">

          <div className="one flex_center">
            <Zoom>
              <StaticImage src="../../images/1.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

          <div className="two flex_center">
            <Zoom>
              <StaticImage src="../../images/2.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

          <div className="three flex_center">
            <Zoom>
              <StaticImage src="../../images/3.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

          <div className="four flex_center">
            <Zoom>
              <StaticImage src="../../images/4.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

          <div className="five flex_center">
            <Zoom>
              <StaticImage src="../../images/5.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

          <div className="six flex_center">
            <Zoom>
              <StaticImage src="../../images/6.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

          <div className="seven flex_center">
            <Zoom>
              <StaticImage src="../../images/7.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

          <div className="eight flex_center">
            <Zoom>
              <StaticImage src="../../images/8.png" className=" photo"></StaticImage>
            </Zoom>
          </div>

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
