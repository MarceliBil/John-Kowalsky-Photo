import * as React from "react";
import "./AboutMe.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const AboutMe = () => {
  return (
    <section className="section about_me flex_center" id="about_me">
      <div className="section_content  ">
        <StaticImage
          src="../../images/john_kowalsky.png"
          alt="John Kowalsky"
          className="about_me_image"
        />

        <h2>
          Hi, I’m John Kowalsky. <br /> Photographer from USA.
        </h2>

        <p className="description">
          Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut
          sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum,
          lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat
          felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.
          Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer
          ac interdum purus. In placerat lorem non quam pulvinar molestie ac
          eget lacus. Proin mollis lobortis porttitor. Nam in fringilla
          felis.Maecenas justo quam, pretium id sapien in, varius vehicula sem.
          Pellentesque consequat mauris justo. Aenean rhoncus tempor volutpat.
          Donec nec ligula rhoncus, vulputate purus quis, pulvinar massa. Nulla
          placerat ullamcorper molestie. Maecenas feugiat mollis egestas.
        </p>
      </div>

      <Link to="#my_services" className="check_out_link flex_center">
        <p> check out my services</p>{" "}
        <StaticImage
          src="../../images/arrow_down.png"
          alt="arrow"
        ></StaticImage>
      </Link>
    </section>
  );
};

export default AboutMe;
