import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { ButtonClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { CardJobProperty } from 'types/interface/context';
import styles from './card-job.module.css';

export const CardJob = ({ title, salary, conditions, location }: CardJobProperty) => (
  <section className={styles.section}>
    <div className={styles.wrap_title}>
      <h2 className={styles.title}>{title}</h2>
      <Button className={ButtonClasses.BTN_STAR} onClick={() => {}}>
        <Svg id={SvgId.STAR} className={SvgClasses.STAR} />
      </Button>
    </div>
    <div className={styles.wrap_description}>
      <span className={styles.salary}>{salary}</span>
      <span className={styles.dot}>•</span>
      <span>{conditions}</span>
    </div>
    <div className={styles.wrap_location}>
      <Svg id={SvgId.LOCATION} className={SvgClasses.LOCATION} />
      <span>{location}</span>
    </div>
  </section>
);
