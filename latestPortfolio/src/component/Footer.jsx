import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        Email:{" "}
        <a href="mailto:malaydadhaniya21@gmail.com">
          malaydadhaniya21@gmail.com
        </a>{" "}
        | Phone: <a href="tel:+918238576925">(+91) 8238576925</a>
      </p>
    </footer>
  );
};

export default Footer;
