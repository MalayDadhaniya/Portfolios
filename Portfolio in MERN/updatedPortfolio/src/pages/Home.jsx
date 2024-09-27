import React from "react";
import style from "./Home.module.css";
import astronod1 from "../imagesVideos/astronod-img.png";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.innerContainer}>
        <div className={style.leftSide}>
          <img src={astronod1} alt="" />
        </div>
        <div className={style.rightSide}>
          <p>Hii, I'm</p>
          <br />
          <p1>Malay Dadhaniya</p1>
          <br />
          <br />
          <p2>
            A Web Developer From <span>Gujarat</span>
          </p2>
          <br />
          <br />
          <p3>
            I’m a creative web developer based in India, and I'm very passionate
            and dedicated to my work.
          </p3>
          <br />
          <br />
          <br />
          <div className={style.btnLinks}>
            <button>About Me</button>
            <div className={style.links}>
              <RiTwitterXFill className={style.link} />
              <SlSocialLinkedin className={style.link} />
              <VscGithubAlt className={style.link} />
              <FaWhatsapp className={style.link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
