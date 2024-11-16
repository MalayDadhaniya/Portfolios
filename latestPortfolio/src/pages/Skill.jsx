import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import style from "./Skill.module.css";

const SkillTree = () => {
  return (
    <div className={style.treeContainer}>
      <h2 className={style.title}>My Skills</h2>

      <div className={style.columns}>
        <div className={style.column}>
          <div className={style.branch}>
            <h3 className={style.categoryTitle}>Programming Languages</h3>
            <ul>
              <li>
                <SiCplusplus className={style.icon} /> C++ (with DSA)
              </li>
              <li>
                <FaJava className={style.icon} /> Java
              </li>
              <li>
                <FaPython className={style.icon} /> Python
              </li>
              <li>
                <FaPhp className={style.icon} /> PHP
              </li>
            </ul>
          </div>

          <div className={style.branch}>
            <h3 className={style.categoryTitle}>Frontend Development</h3>
            <ul>
              <li>
                <FaHtml5 className={style.icon} /> HTML
              </li>
              <li>
                <FaCss3Alt className={style.icon} /> CSS
              </li>
              <li>
                <FaJs className={style.icon} /> JavaScript
              </li>
              <li>
                <FaReact className={style.icon} /> React.js
              </li>
              <li>
                <FaBootstrap className={style.icon} /> Bootstrap
              </li>
            </ul>
          </div>
        </div>

        <div className={style.column}>
          <div className={style.branch}>
            <h3 className={style.categoryTitle}>Backend Development</h3>
            <ul>
              <li>
                <FaNodeJs className={style.icon} /> Node.js (Basics)
              </li>
              <li>
                <SiExpress className={style.icon} /> Express.js (Basics)
              </li>
            </ul>
          </div>

          <div className={style.branch}>
            <h3 className={style.categoryTitle}>Databases</h3>
            <ul>
              <li>
                <SiMysql className={style.icon} /> MySQL
              </li>
              <li>
                <SiMongodb className={style.icon} /> MongoDB
              </li>
            </ul>
          </div>

          <div className={style.branch}>
            <h3 className={style.categoryTitle}>Animation Libraries</h3>
            <ul>
              <li>GSAP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
