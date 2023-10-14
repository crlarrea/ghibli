import React from "react";
import sootSprite from '../assets/img/soot_sprite.png'
export const Footer = () => {
  return (
    <footer>
        <img src={sootSprite}/>
      <p>
        
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://crlarrea.github.io" target="_blank">
          crlarrea
        </a>
      </p>
    </footer>
  );
};
