import React, { useState, useEffect, useRef } from "react";
import "./Merch.css";
import { AiFillTrophy, AiOutlineCloseCircle } from "react-icons/ai";

import aboutImage from "/about_image.png";
const Merch = () => {
  return (
    <div className="merch">
      <div className="top">
        <div className="left-section">
          <div className="solicitation">
            <h1 className="syncopate-bold">MERCH</h1>
            <h3>YOU HAVE A LEGAL OBLIGATION TO BUY</h3>
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    </div>
  );
};

export default Merch;
