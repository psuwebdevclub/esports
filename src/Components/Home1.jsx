import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from 'three'
import "./Home1.css";
import { Link } from "react-router-dom";

const Home1 = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0018a3,
          vertexColors: true,
          backgroundColor: 0x1e1e1e,
          points: 20.00,
          maxDistance: 25.00,
          spacing: 17.00,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="home-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/roster">Roster</Link>
        </div>
      </nav>
      <div className="content">
        <h1>PENN STATE<br />ESPORTS</h1>
        <p>Welcome to the Future of Competitive Gaming</p>
        <button className="join-button" onClick={() => window.open('https://discord.gg/yourlink', '_blank')}>
          JOIN NOW
        </button>
      </div>
    </div>
  );
};

export default Home1;
