import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.scss"

// markup
const Portraits = () => {
    return (
        <main>
            <title>John Kowalsky | Portraits</title>

            <h1>Portraits</h1>
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

export default Portraits;
