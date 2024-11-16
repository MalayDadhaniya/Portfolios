import React from "react";
import style from "./Iconlink.module.css";
import { GrLinkedin } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

const Iconlink = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.icon}>
        <GrLinkedin />
      </div>
      <div className={style.icon}>
        <LuInstagram />
      </div>
      <div className={style.icon}>
        <FaWhatsapp />
      </div>
      <div className={style.icon}>
        <ImGithub />
      </div>
    </div>
  );
};

export default Iconlink;
