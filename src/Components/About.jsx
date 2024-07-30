import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { AiFillTrophy, AiOutlineCloseCircle } from "react-icons/ai";

import aboutImage from "/about_image.png";
const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1 className="syncopate-bold">WHAT WE DO</h1>
        <p>
          SOMETHING COOL HISTORY STUFF BLAH BLAH BLAH BLAH MORE STUFF HERE YADA
          YADA
        </p>
      </div>
      <main>
        <div className="left-section">
          <img src={aboutImage} alt="About" />
        </div>
        <div className="right-section">
          <ul className="info-list">
            <li>
              <div className="info-section">
                <div>
                  <h2 className="syncopate-bold">
                    3423+
                    <AiFillTrophy className="icon" />
                  </h2>
                  <p>WINS</p>
                </div>
                <div>
                  <h2 className="syncopate-bold">
                    <AiOutlineCloseCircle className="icon" />
                    3.34
                  </h2>
                  <p>K/D</p>
                </div>
              </div>
            </li>
            <li>
              <div className="info-section">
                <div>
                  <h2 className="syncopate-bold">
                    <AiFillTrophy className="icon" />
                    3423+
                  </h2>
                  <p>WINS</p>
                </div>
                <div>
                  <h2 className="syncopate-bold">
                    <AiOutlineCloseCircle className="icon" />
                    3.34
                  </h2>
                  <p>K/D</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default About;
