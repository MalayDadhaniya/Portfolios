import React from "react";
import style from "./Project.module.css";
import img1 from "../images/Project1.png";
import img2 from "../images/Project2.png";
import img3 from "../images/Project3.png";
import img4 from "../images/Project4.png";

const Project = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <img src={img1} alt="todoApp" />
        <div className={style.projectDetails}>
          <p className={style.projectName}>TODO App</p>
          <p className={style.projectLanguages}>HTML, CSS, JAVASCRIPT</p>
        </div>
      </div>
      <div className={style.box}>
        <img src={img2} alt="" />
        <div className={style.projectDetails}></div>
      </div>
      <div className={style.box}>
        <img src={img3} alt="" />
        <div className={style.projectDetails}></div>
      </div>
      <div className={style.box}>
        <img src={img4} alt="" />
        <div className={style.projectDetails}></div>
      </div>
      <div className={style.box}>
        <img src={img1} alt="" />
        <div className={style.projectDetails}></div>
      </div>
      <div className={style.box}>
        <img src={img1} alt="" />
        <div className={style.projectDetails}></div>
      </div>
    </div>
  );
};

export default Project;
