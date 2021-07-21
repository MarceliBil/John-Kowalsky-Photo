import * as React from "react";
import "../../src/styles/global.scss";

import Header from "../components/Header/Header";
import Start from "../components/Start/Start";
import AboutMe from "../components/AboutMe/AboutMe";
import MyServices from "../components/MyServices/MyServices";
import MyGallery from "../components/MyGallery/MyGallery";
import Footer from "../components/Footer/Footer";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>John Kowalsky Photo | Home</title>
      <Header></Header>
      <Start></Start>
      <AboutMe></AboutMe>
      <MyServices></MyServices>
      <MyGallery></MyGallery>
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
