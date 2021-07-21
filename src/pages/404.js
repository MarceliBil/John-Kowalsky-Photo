import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.scss";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>

      <h1>Site doesn't exist</h1>
      <br />
      <Link to="/">
        <div className="btn">
          <button>Go home</button>
        </div>
      </Link>
    </main>
  );
};

export default NotFoundPage;
