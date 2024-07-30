import React, { useState, useEffect, useRef } from "react";
import "./Teams.css";
import apexBanner from "/apex_banner.jpg";
import { AiFillCaretDown } from "react-icons/ai";

const Teams = () => {
  const games = [
    { name: "Apex Legends", id: 1, imageSrc: apexBanner, teamInfo: "" },
    { name: "Valorant", id: 2, imageSrc: apexBanner, teamInfo: "" },
    { name: "League of Legends", id: 3, imageSrc: apexBanner, teamInfo: "" },
    { name: "Overwatch", id: 4, imageSrc: apexBanner, teamInfo: "" },
    { name: "Call of Duty", id: 5, imageSrc: apexBanner, teamInfo: "" },
    { name: "Fortnite", id: 6, imageSrc: apexBanner, teamInfo: "" },
    { name: "Rainbow Six Siege", id: 7, imageSrc: apexBanner, teamInfo: "" },
    { name: "Rocket League", id: 8, imageSrc: apexBanner, teamInfo: "" },
    { name: "Hearthstone", id: 9, imageSrc: apexBanner, teamInfo: "" },
    { name: "Smite", id: 10, imageSrc: apexBanner, teamInfo: "" },
    { name: "World of Warcraft", id: 11, imageSrc: apexBanner, teamInfo: "" },
    { name: "Dota 2", id: 12, imageSrc: apexBanner, teamInfo: "" },
    {
      name: "Counter-Strike: Global Offensive",
      id: 13,
      imageSrc: apexBanner,
      teamInfo: "",
    },
    { name: "PUBG", id: 14, imageSrc: apexBanner, teamInfo: "" },
    { name: "FIFA", id: 15, imageSrc: apexBanner, teamInfo: "" },
    { name: "Madden", id: 16, imageSrc: apexBanner, teamInfo: "" },
    { name: "NBA 2K", id: 17, imageSrc: apexBanner, teamInfo: "" },
    { name: "Super Smash Bros", id: 18, imageSrc: apexBanner, teamInfo: "" },
    { name: "Mortal Kombat", id: 19, imageSrc: apexBanner, teamInfo: "" },
    { name: "Street Fighter", id: 20, imageSrc: apexBanner, teamInfo: "" },
  ];

  const scrollContainerRef = useRef(null);

  const handleScrollDown = () => {
    scrollContainerRef.current.scrollBy({
      top: 100, //not working
      behavior: "smooth",
    });
  };

  return (
    <div className="teams">
      <section className="left-section">
        <h1 className="syncopate-bold">TEAMS</h1>
        <p>SELECT A GAME TO LEARN MORE ABOUT THE TEAM</p>
        <button id="newTeam" className="action-button">
          START A NEW TEAM
        </button>
      </section>
      <section className="right-section">
        <div ref={scrollContainerRef} className="game-list-container">
          <ul className="game-list">
            {games.map((game) => (
              <li key={game.id} className="game-item">
                <img src={game.imageSrc} alt={game.name} />
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
