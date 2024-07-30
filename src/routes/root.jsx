import { useState } from "react";
import "./root.css";
import Teams from "../Components/Teams";
import About from "../Components/About";
import Merch from "../Components/Merch";

function Root() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');
      </style>
      <Teams />
      <About />
      <Merch />
    </>
  );
}

export default Root;
