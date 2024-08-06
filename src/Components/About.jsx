import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { AiFillTrophy, AiOutlineCloseCircle } from "react-icons/ai";
import FadeInText from "./FadeInText";
import CountUpNumber from "./CountUpNumber";

import aboutImage from "/about_image.png";
const About = () => {
  return (
    <div className="about">
      <div className="title">
        <FadeInText>
          <h1 className="syncopate-bold">WHAT WE DO</h1>
          <p>
            SOMETHING COOL HISTORY STUFF BLAH BLAH BLAH BLAH MORE STUFF HERE
            YADA YADA
          </p>
        </FadeInText>
      </div>
      <main>
        <div className="left-section">
          <FadeInText>
            <img src={aboutImage} alt="About" />
          </FadeInText>
        </div>
        <div className="right-section">
          <ul className="info-list">
            <li>
              <div className="info-section">
                <div>
                  <h2 className="syncopate-bold">
                    <CountUpNumber endValue={3242} prefix="" />+
                    <AiFillTrophy className="icon" />
                  </h2>
                  <p>WINS</p>
                </div>
                <div>
                  <h2 className="syncopate-bold">
                    <AiOutlineCloseCircle className="icon" />
                    <CountUpNumber endValue={3.34} prefix="" />
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
                    <CountUpNumber endValue={3242} prefix="" />+
                  </h2>
                  <p>WINS</p>
                </div>
                <div>
                  <h2 className="syncopate-bold">
                    <AiOutlineCloseCircle className="icon" />
                    <CountUpNumber endValue={3.34} prefix="" />
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
