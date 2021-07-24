import React from "react";
import "./MyGallery.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const MyGallery = () => {
  return (
    <section className="section my_gallery flex_center" id="my_gallery">
      <div className="section_content flex_center">
        <h3>Some of my photos:</h3>
        <div className="gallery_grid">
          <div className="one flex_center">
            <Zoom>
              <StaticImage
                src="../../images/one.png"
                className="photo"
              ></StaticImage>
            </Zoom>
          </div>

          <div className="two flex_center">
            <Zoom>
              <StaticImage
                src="../../images/two.png"
                className="photo"
              ></StaticImage>
            </Zoom>
          </div>

          <div className="three flex_center">
            <Zoom>
              <StaticImage
                src="../../images/three.png"
                className="photo"
              ></StaticImage>
            </Zoom>
          </div>

          <div className="four flex_center">
            <Zoom>
              <StaticImage
                src="../../images/four.png"
                className="photo"
              ></StaticImage>
            </Zoom>
          </div>

          <div className="five flex_center">
            <Zoom>
              <StaticImage
                src="../../images/five.png"
                className=" photo"
              ></StaticImage>
            </Zoom>
          </div>

          <div className="six flex_center">
            <Zoom>
              <StaticImage
                src="../../images/six.png"
                className="photo"
              ></StaticImage>
            </Zoom>
          </div>

          <div className="seven flex_center">
            <Zoom>
              <StaticImage
                src="../../images/seven.png"
                className="photo"
              ></StaticImage>
            </Zoom>
          </div>

          <div className="eight flex_center">
            <Zoom>
              <StaticImage
                src="../../images/eight.png"
                className="photo"
              ></StaticImage>
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
