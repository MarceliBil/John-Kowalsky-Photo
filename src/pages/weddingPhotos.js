import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.scss";

// markup
const WeddingPhotos = () => {
  return (
    <main>
      <title>John Kowalsky | Wedding photos</title>

      <h1>Wedding photos</h1>
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

export default WeddingPhotos;
