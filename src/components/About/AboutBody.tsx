import styles from './styles.module.css';

const AboutBody = () => {
  return (
    <>
      <div id="about">
      </div>
      <div className={styles.aboutRoot}>
        <p className={`${styles.aboutHearder} ${styles.fontGreen}`}>__About__</p>
        <p className={styles.aboutDescription}>
          My work primarily focused on <span className={`${styles.fontGreen} ${styles.standOutFont}`}>microservices-based web software development</span>,
          where I actively engage in both <span className={`${styles.fontGreen} ${styles.standOutFont}`}>front-end</span> and <span className={`${styles.fontGreen} ${styles.standOutFont}`}>back-end</span> application development.
          It involves me developing <span className={`${styles.fontGreen} ${styles.standOutFont}`}>APIs</span> and seamlessly integrating them into front-end applications,
          following a <span className={`${styles.fontGreen} ${styles.standOutFont}`}>CI/CD</span> workflow and <span className={`${styles.fontGreen} ${styles.standOutFont}`}>Agile</span> development process since <span className={`${styles.fontGreen} ${styles.standOutFont}`}>2021.</span>
        </p>
        <p className={styles.aboutDescription}>
          I graduated in <span className={`${styles.fontGreen} ${styles.standOutFont}`}>2022</span> with a <span className={`${styles.fontGreen} ${styles.standOutFont}`}>Bachelor's degree</span> in <span className={`${styles.fontGreen} ${styles.standOutFont}`}>Computer Science</span>.
          In my free time, I enjoy playing <span className={`${styles.fontGreen} ${styles.standOutFont}`}>cricket</span> and finding entertainment in activities such as watching <span className={`${styles.fontGreen} ${styles.standOutFont}`}>anime</span>, <span className={`${styles.fontGreen} ${styles.standOutFont}`}>TV series</span>, <span className={`${styles.fontGreen} ${styles.standOutFont}`}>movies</span>, and following cricket matches.
        </p>
      </div>
    </>

  )
}

export default AboutBody;