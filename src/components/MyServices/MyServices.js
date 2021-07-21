import * as React from "react";
import "./MyServices.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const MyServices = () => {
  return (
    <section className="section my_services flex_center" id="my_services">
      <div className="section_content flex_center ">
        <h3>Some of the services I offer:</h3>

        <div className="services_grid flex_center">


          <Link to="../../portraits">
            <div className="service flex_center">
              <p className="service_title">portraits</p>
              <StaticImage src="../../images/blank.png" alt="blank" />
              <StaticImage
                src="../../images/portrait.png"
                alt="portrait"
                className="service_img"
              />
            </div>
          </Link>

          <Link to="../../groupPhotos">
            <div className="service flex_center">
              <p className="service_title">group photos</p>
              <StaticImage src="../../images/blank.png" alt="blank" />
              <StaticImage
                src="../../images/group_photos.png"
                alt="group photos"
                className="service_img"
              />
            </div>
          </Link>

          <Link to="../../weddingPhotos">
            <div className="service flex_center">
              <p className="service_title">wedding photography</p>
              <StaticImage src="../../images/blank.png" alt="blank" />
              <StaticImage
                src="../../images/wedding.png"
                alt="wedding photography"
                className="service_img"
              />
            </div>
          </Link>

          <Link to="../../droneRecording">
            <div className="service flex_center">
              <p className="service_title">drone recording</p>
              <StaticImage src="../../images/blank.png" alt="blank" />
              <StaticImage
                src="../../images/drone.png"
                alt="drone"
                className="service_img"
              />
            </div>
          </Link>

          <Link to="../../photosEditing">
            <div className="service flex_center">
              <p className="service_title">photos editing</p>
              <StaticImage src="../../images/blank.png" alt="blank" />
              <StaticImage
                src="../../images/photo_editing.png"
                alt="photo editing"
                className="service_img"
              />
            </div>
          </Link>

          <Link to="../../portfolio">
            <div className="service flex_center">
              <p className="service_title">portfolio (for models)</p>
              <StaticImage src="../../images/blank.png" alt="blank" />
              <StaticImage
                src="../../images/model.png"
                alt="portfolio (for models)"
                className="service_img"
              />
            </div>
          </Link>
        </div>
      </div>

      <Link to="#my_gallery" className="check_out_link flex_center">
        <p> check out my gallery</p>{" "}
        <StaticImage src="../../images/arrow_down.png"></StaticImage>
      </Link>
    </section>
  );
};

export default MyServices;
