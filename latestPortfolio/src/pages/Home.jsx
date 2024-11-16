import React from "react";
import style from "./Home.module.css";
import img from "../images/myImg.jpg";

const Home = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.left}>
        <h2>Hi,</h2>
        <br />
        <p>
          I'm <b>Malay Dadhaniya</b>, a Website developer with a passion for
          building interactive and user-friendly web applications. With a strong
          foundation in modern web technologies, I create solutions that combine
          functionality with aesthetic appeal.
        </p>
        <br />
        <p>
          With hands-on experience in React, JavaScript, and a variety of web
          technologies, I aim to craft efficient, scalable, and visually
          appealing applications.
        </p>
      </div>
      <div className={style.right}>
        <img src={img} alt="Profile of Malay Dadhaniya" />
      </div>
    </div>
  );
};

export default Home;
