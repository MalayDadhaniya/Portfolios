import React from "react";
import style from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={style.mainContainer}>
      <h2 className={style.title}>Experience : </h2>
      <div className={style.experienceSection}>
        <div className={style.experienceCard}>
          <h3>
            <u>PHP Internship</u> - Digitize Info System, Rajkot (May 2024 -
            June 2024)
          </h3>
          <p>
            - Focused on CRUD operations and backend development. Gained
            practical experience in database management and form handling.
          </p>
        </div>
        <div className={style.experienceCard}>
          <h3>
            <u>React JS Internship</u> - Imbuesoft LLP, Rajkot (May 2024 - June
            2024)
          </h3>
          <p>
            - Developed components in React and gained experience with React
            Router and Hooks. Contributed to projects by implementing frontend
            features and enhancing the user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
