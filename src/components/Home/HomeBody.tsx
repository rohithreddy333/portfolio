import React from "react";
import myImage from '../../assets/myImage.png';
import styles from './styles.module.css';

const HomeBody = () => {
  return (
    <>
    <div className={styles.rootDiv}>
      <div className={styles.contentDiv}>
        <p className={styles.helloTitle} >
          <span className={`${styles.blink} ${styles.fontGreen}`} style={{marginRight: '5px'}}>&#60;</span>HELLO<span className={`${styles.blink} ${styles.fontGreen}`}>/&#62;</span>
        </p>
        <p className={styles.homeDescription}>Me, <span className={`${styles.fontGreen} ${styles.standOutFont}`}>ROHITH REDDY</span> currently working as a Software Engineer at <a className={`${styles.fontGreen} ${styles.standOutFont}`} href="https://www.octanner.com/in/" target="_blank" rel="noreferrer">O.C. Tanner</a>. </p>
      </div>
      <img className={styles.profileImage} src={myImage} alt={`Rohith's pic`} />
    </div>
    </>
  )
}

export default HomeBody;