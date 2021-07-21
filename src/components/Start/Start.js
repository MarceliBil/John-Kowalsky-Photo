import * as React from "react";
import "./Start.scss";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Start = () => {
  return (
    <section className="section start flex_center">
      <div id="start"></div>
      <div className="section_content ">
        <div className="left">
          <div className="slogan">
            <h1>John Kowalsky</h1>
            <h2>photographer</h2>

            <Link to="#about_me">
              <div className="btn">
                <button>more about me</button>
              </div>
            </Link>
          </div>

          <div className="qote">
            <p>
              {" "}
              “Life is like a camera. Just focus on what’s important and capture
              the good times, develop from the negatives and if things don’t
              work out, just take another shot.”
            </p>
          </div>
        </div>

        <div className="start_image">
          <StaticImage src="../../images/bus.png" alt="bus" />
        </div>
      </div>
    </section>
  );
};

export default Start;
