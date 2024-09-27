import React, { useState } from "react";
import style from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.innerContainer}>
        <div className={style.webLogo}>MyFolio</div>
        <div className={style.menuIcon} onClick={toggleMenu}>
          <div className={style.menuLine}></div>
          <div className={style.menuLine}></div>
          <div className={style.menuLine}></div>
        </div>
        <ul className={`${style.navLinks} ${isMenuOpen ? style.active : ""}`}>
          <li onClick={closeMenu}>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#skills">Skill</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#experience">Experience</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
