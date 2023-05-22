import { Svg } from 'components/common/svg-element/Svg';
import { Star } from 'components/star/Star';
import { SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { CardProps } from 'types/types/props';
import { getStringSaLary } from 'utils/helpers/main-page';
import styles from './card-job.module.css';

export const CardJob = ({ title, salaryFrom, salaryTo, currency, conditions, location, id, changeStar }: CardProps) => {
  const salary = getStringSaLary(salaryFrom, salaryTo, currency);
  return (
    <section
      className={styles.section}
      onClick={() => console.log(`carta ${String(id)}`)}
      role='button'
      tabIndex={-1}
      onKeyDown={() => {}}
    >
      <div className={styles.wrap_title}>
        <h2 className={styles.title}>{title}</h2>
        <Star id={id} changeStar={changeStar} />
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
};
