import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillTwitch,
  AiFillDiscord,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer">
      <AiFillFacebook
        className="icon"
        onClick={() => openLink("https://www.facebook.com/PSUEsports/")}
      />
      <AiOutlineInstagram
        className="icon"
        onClick={() => openLink("https://www.instagram.com/psuesports/")}
      />
      <AiFillYoutube
        className="icon"
        onClick={() =>
          openLink("https://www.youtube.com/channel/UCRPbFjWC7dSRJgdIM38Nxyw")
        }
      />
      <AiFillTwitch
        className="icon"
        onClick={() => openLink("https://www.twitch.tv/psuesports")}
      />
      <FaXTwitter
        className="icon"
        onClick={() => openLink("https://twitter.com/psuesports")}
      />
      <AiFillDiscord
        className="icon"
        onClick={() => openLink("https://discord.gg/HWd7ftw24Z")}
      />
    </div>
  );
};

export default Footer;
