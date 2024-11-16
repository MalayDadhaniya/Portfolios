import React from "react";
import style from "./About.module.css";
import img from "../images/aboutLogo.png";

const About = () => {
  return (
    <div className={style.mainContainer}>
      <h2 className={style.title}>About us</h2>
      <div className={style.aboutText}>
        <img src={img} alt="About logo" />
        <p>
          &ensp;&ensp;&ensp;&ensp;&ensp;I’m a dedicated <b>web developer</b>{" "}
          based in <b>Rajkot, India</b>, currently in my final year of a B.Sc.
          in IT. With a broad skill set across both <b>frontend</b> and{" "}
          <b>backend development</b>, including JavaScript, React, and PHP, I
          approach every project with curiosity and a drive to deliver quality
          results. My internships in React and PHP have deepened my practical
          knowledge, enabling me to create responsive and dynamic applications.
          Outside of my technical pursuits, I enjoy <b>cricket</b> and
          <b> drawing</b>, which keep my creativity and team spirit sharp.
        </p>
      </div>
    </div>
  );
};

export default About;
