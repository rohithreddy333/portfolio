import { Card } from '@mui/material';
import styles from './styles.module.css';

interface cardPropTypes {
  srcUrl: string,
  skillTitle: string,
  altText: string
}

const SkillCard = (props: cardPropTypes) => {
  return (
    <div>
      <Card className={styles.cardSize}>
        <img 
          src={props.srcUrl}
          alt={props.altText}
          className={styles.iconSize}
        />
          <p className={styles.skillTitle}>
            {props.skillTitle}
          </p>
      </Card>
    </div>
  )
}

export default SkillCard;