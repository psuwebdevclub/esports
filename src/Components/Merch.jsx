import React, { useState, useEffect, useRef } from "react";
import "./Merch.css";
import jersey from "/jersey.png";
import banner from "/banner.png";
const Merch = () => {
  return (
    <div className="merch">
      <div className="top">
        <div className="left-section">
          <h1 className="syncopate-bold">MERCH</h1>
          <h2>YOU HAVE A LEGAL OBLIGATION TO BUY</h2>
        </div>
        <div className="right-section">
          <img
            src={jersey}
            alt="Jersey"
            onClick={() => {
              window.open(
                "https://esportsgear.com/products/esports-at-penn-state-jersey"
              );
            }}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="left-section">
          <img
            src={banner}
            alt="Banner"
            onClick={() => {
              window.open(
                "https://esportsgear.com/products/psu-esports-street-gear-sublimated-flag"
              );
            }}
          />
        </div>
        <div className="right-section">
          <h1 className="syncopate-bold">WEAR WITH PRIDE</h1>
        </div>
      </div>
    </div>
  );
};

export default Merch;
