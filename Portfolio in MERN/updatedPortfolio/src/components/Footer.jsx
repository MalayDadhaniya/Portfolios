import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.innerContainer}>
        <div className={style.leftSide}>
          <h4>My contact info.</h4>
          <p>Email: malaydadhaniya21@gmail.com</p>
          <p>Phone: (+91) 8238576925</p>
          <p>Country: India</p>
          <p>State: Gujarat</p>
          <p>District: Jamnagar</p>
        </div>
        <div className={style.rightSide}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7027.65014455839!2d69.85013014155915!3d22.097877319330326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395707fe95898c87%3A0xf9e5affb954da289!2sBhangor%2C%20Gujarat%20361305!5e1!3m2!1sen!2sin!4v1727351773143!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
