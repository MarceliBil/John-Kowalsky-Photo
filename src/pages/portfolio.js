import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.scss";

// markup
const Portfolio = () => {
  return (
    <main>
      <title>John Kowalsky | Portfolio for models</title>

      <h1>Portfolio for models</h1>
      <h2>site under construction</h2>
      <br />
      <Link to="/">
        <div className="btn">
          <button>Go home</button>
        </div>
      </Link>
    </main>
  );
};

export default Portfolio;
