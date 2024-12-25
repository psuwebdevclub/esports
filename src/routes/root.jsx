import { useState } from "react";
import "./root.css";
import Teams from "../Components/Teams";
import About from "../Components/About";
import Merch from "../Components/Merch";
import Footer from "../Components/Footer";
import Home1 from "../Components/Home1";
function Root() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');
      </style>
      <Home1 />
      <Teams />
      <About />
      <Merch />
      <Footer />

    </>
  );
}

export default Root;
