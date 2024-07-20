import React, { useState, useEffect, useRef } from 'react';
import './Home1.css';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Apex from "../assets/Apex.jpg";

const MotionButton = motion(Button);

const HomePage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          backgroundAlpha: 0,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x5db3ff,
          points: 7.00,
          maxDistance: 19.00,
          spacing: 16.00,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="hero-container" ref={myRef}>
      <header>
        <nav>
          <ul>
            <li><a href="#news">NEWS</a></li>
            <li><a href="#roster">ROSTER</a></li>
            <li><a href="#events">EVENTS</a></li>
          </ul>
        </nav>
      </header>
      <div className="hero-content">
        <h1>WE ARE PSU ESPORTS</h1>
        <p>Join our competitive gaming community and represent Penn State in national tournaments.</p>
        <div className="cta-buttons">
          <MotionButton
            variant="contained"
            className="join-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN
          </MotionButton>
          <MotionButton
            variant="outlined"
            className="learn-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LEARN MORE
          </MotionButton>
        </div>
      </div>
      <footer>
        <div className="banner">
        <div className="left-section">
          <h2 className='content'>NEW SOMETHING</h2>
          <a href="#" className="learn-more">LEARN MORE →</a>
        </div>
        <div className="right-section">
          <img src={Apex} alt= "gameTitle" />
        </div>
      </div>

      </footer>
    </div>
  );
};

export default HomePage;