import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.213230450936!2d70.76521217506874!3d22.282360679699465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbbfcdeb3e33%3A0x11a782bf6775a71d!2sAtmiya%20University!5e1!3m2!1sen!2sin!4v1731166594011!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <form>
        <div className={style.nameEmail}>
          <div>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" placeholder="Enter Your Name" />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className={style.phoneSubject}>
          <div>
            <label htmlFor="phone">Phone : </label>
            <input type="text" id="phone" placeholder="Enter Phone Number" />
          </div>
          <div>
            <label htmlFor="subject">Subject : </label>
            <input type="text" id="subject" placeholder="Enter Your Subject" />
          </div>
        </div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Enter Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
