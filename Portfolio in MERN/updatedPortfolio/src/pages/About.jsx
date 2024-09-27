import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.mainContainer} id="about">
      <div className={style.aboutTitle}>
        About <span>us</span>
      </div>
      <div className={style.innerContainer}>
        <p>
          <span>Hey there!</span>
          <br /> I'm Malay Dadhaniya, a web developer passionate about crafting
          responsive and user-friendly websites. With a BScIT background, I
          bring strong problem-solving skills and thrive in team environments.
          I'm constantly learning and exploring new technologies to enhance my
          skills. Let's create something amazing together! I have a deep passion
          for drawing and cricket. I blend my love for art and the sport into a
          unique expression of creativity and athleticism.
        </p>
      </div>
    </div>
  );
};

export default About;
