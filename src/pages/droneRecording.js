import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.scss";

// markup
const DroneRecording = () => {
  return (
    <main>
      <title>John Kowalsky | Drone recording</title>

      <h1>Drone recording</h1>
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

export default DroneRecording;
