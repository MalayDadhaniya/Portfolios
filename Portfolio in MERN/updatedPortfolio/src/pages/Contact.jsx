import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.mainContainer} id="contact">
      <div className={style.innerContainer}>
        <div className={style.contactTitle}>
          Contact <span>us</span>
        </div>
        <form>
          <label>Enter Name</label>
          <input type="text" placeholder="Enter Your Name" required />
          <label>Enter Email</label>
          <input type="email" placeholder="Enter Email Address" required />
          <label>Enter Message</label>
          <textarea placeholder="Enter Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
