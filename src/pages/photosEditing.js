import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.scss";

// markup
const PhotosEditing = () => {
  return (
    <main>
      <title>John Kowalsky | Photos editing</title>

      <h1>Photos editing</h1>
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

export default PhotosEditing;
