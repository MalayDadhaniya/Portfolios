import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.mainContaner}>
      <div className={style.innerContainer}>
        <div className={style.webLogo}>MyFolio</div>
        <ul>
          <li>
            <Link to="/">
              <a className="active">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">Expreance</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
