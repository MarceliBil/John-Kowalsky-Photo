import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.scss";

// markup
const GroupPhotos = () => {
  return (
    <main>
      <title>John Kowalsky | Group photos</title>

      <h1>Group photos</h1>
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

export default GroupPhotos;
