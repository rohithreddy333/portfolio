import SkillCard from './SkillCard';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import java from '../../assets/java.png';
import js from '../../assets/js.png';
import nodeJs from '../../assets/nodeJs.png';
import oracle from '../../assets/oracle.png';
import play from '../../assets/play.png';
import spring from '../../assets/spring.png'
import postgres from '../../assets/postgres.png';
import react from '../../assets/react.png';
import scala from '../../assets/scala.png';
import typescript from '../../assets/typescript.png';
import webpack from '../../assets/webpack.png'
import styles from './styles.module.css';

const SkillsBody = () => {
  return (

    <>
      <div id="skills">
      </div>
      <div >
        <p className={`${styles.skillsHeader} ${styles.fontGreen}`}>__Skills__</p>
        <p className={styles.skillCategory}><span className={styles.fontGreen}>Programming Languages</span>;</p>

        <div className={styles.skillsContainer}>
          <div className={styles.skillsDivider}>
            <SkillCard
              srcUrl={js}
              altText='Java Script logo'
              skillTitle='Java Script'
            />
            <SkillCard
              srcUrl={typescript}
              altText='Type Script logo'
              skillTitle='Type Script'
            />
          </div>

          <div className={styles.skillsDivider}>
            <SkillCard
              srcUrl={java}
              altText='java logo'
              skillTitle='JAVA'
            />
            <SkillCard
              srcUrl={scala}
              altText='Scala logo'
              skillTitle='Scala'
            />
          </div>
        </div>

        <p className={styles.skillCategory}>&#60;<span className={styles.fontGreen}>Front-End</span>/&#62;</p>
        <div className={styles.skillsContainer}>

          <div className={styles.skillsDivider}>
            <SkillCard
              srcUrl={html}
              altText='Html logo'
              skillTitle='HTML 5'
            />
            <SkillCard
              srcUrl={css}
              altText='CSS logo'
              skillTitle='CSS'
            />
          </div>


          <div className={styles.skillsDivider}>
            <SkillCard
              srcUrl={react}
              altText='react logo'
              skillTitle='React'
            />
            <SkillCard
              srcUrl={webpack}
              altText='webpack logo'
              skillTitle='Webpack'
            />
          </div>
        </div>

        <p className={styles.skillCategory}>&#123;<span className={styles.fontGreen}>Back-End</span>&#125;</p>
        <div className={styles.skillsContainer}>

          <div className={styles.skillsDivider}>
            <SkillCard
              srcUrl={spring}
              altText='spring logo'
              skillTitle='Spring'
            />
            <SkillCard
              srcUrl={play}
              altText='play logo'
              skillTitle='Play'
            />
          </div>


          <div className={styles.skillsDivider}>
            <SkillCard
              srcUrl={nodeJs}
              altText='node logo'
              skillTitle='Node and Expressjs'
            />
          </div>
        </div>

        <p className={styles.skillCategory}>(<span className={styles.fontGreen}>Databases</span>)</p>
        <div className={styles.skillsContainer}>

          <div className={styles.skillsDivider}>
            <SkillCard
              srcUrl={oracle}
              altText='oracle logo'
              skillTitle='ORACLE'
            />
            <SkillCard
              srcUrl={postgres}
              altText='postgres logo'
              skillTitle='PostgreSQL'
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default SkillsBody;
