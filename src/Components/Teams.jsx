import React, { useState, useEffect, useRef } from "react";
import "./Teams.css";
import { AiFillCaretDown } from "react-icons/ai";
import FadeInText from "./FadeInText";

const Teams = () => {
  const [games, setGames] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://psuesports.pythonanywhere.com/games/');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const handleScrollDown = () => {
    scrollContainerRef.current.scrollBy({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="teams">
      <section className="left-section">
        <FadeInText>
          <h1 className="syncopate-bold">TEAMS</h1>
          <p>SELECT A GAME TO LEARN MORE ABOUT THE TEAM</p>
          <button id="newTeam" className="action-button">
            START A NEW TEAM
          </button>
        </FadeInText>
      </section>
      <section className="right-section">
        <div ref={scrollContainerRef} className="game-list-container">
          <ul className="game-list">
            {games.map((game, index) => (
              <li key={index} className="game-item">
                <img src={game.image} alt={game.name} />
              </li>
            ))}
          </ul>
        </div>
        <AiFillCaretDown className="down-arrow" onClick={handleScrollDown} />
      </section>
    </div>
  );
};

export default Teams;
