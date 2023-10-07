import * as React from "react";
import styles from './styles.module.css';
import linkedin from '../../assets/linkedin.svg';
import gitub from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';

const ContactBody = () => {
  return (
    <>
      <div className={styles.contactRoot}>
        <a className={styles.spaceBetweenLinks} target="blank" href="https://www.linkedin.com/in/rohithcodes">
          <img src={linkedin} alt="Rohith's linked in logo" />
        </a>
        <a className={styles.spaceBetweenLinks} target="blank" href="https://github.com/rohithDhoodhipala">
          <img src={gitub} alt="Rohith's github in logo" />
        </a>
        <a className={styles.spaceBetweenLinks} target="blank" href="mailto:rohith.dhoodhipala@gmail.com">
          <img src={gmail} alt="Rohith's linked in logo" />
        </a>
      </div>
      <p className={styles.copyright}>Copyright © 2023 • Rohith Reddy Dhoodhipala</p>
    </>
  )
};

export default ContactBody;
