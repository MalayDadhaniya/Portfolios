import React from "react";
import style from "./Navbar.module.css";
import { FaPencilAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={style.mainContainer}>
      <p className={style.logo}>
        <FaPencilAlt className={style.webIcon} />
        My Portfolio
      </p>
      <ul className={style.navList}>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Download CV</li>
      </ul>
    </div>
  );
};

export default Navbar;
