import clsx from 'clsx';
import { Svg } from 'components/common/svg-element/Svg';
import { Star } from 'components/star/Star';
import { SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { CardProps } from 'types/types/props';
import { getStringSaLary } from 'utils/helpers/main-page';
import styles from './card-job.module.css';

export const CardJob = ({
  title,
  salaryFrom,
  salaryTo,
  currency,
  conditions,
  location,
  id,
  changeStar,
  job,
}: CardProps) => {
  const salary = getStringSaLary(salaryFrom, salaryTo, currency);
  const classesSection = clsx({
    [styles.section]: true,
    [styles.section_job]: job,
  });
  const classesTitle = clsx({
    [styles.title]: true,
    [styles.title_job]: job,
  });
  const classesSalary = clsx({
    [styles.salary]: true,
    [styles.salary_job]: job,
  });
  const classesConditions = clsx({
    [styles.wrap_description]: true,
    [styles.wrap_description_job]: job,
  });
  return (
    <section className={classesSection} data-elem={`vacancy-${id}`}>
      <div className={styles.wrap_title}>
        <h2 className={classesTitle}>{title}</h2>
        <Star id={id} changeStar={changeStar} />
      </div>
      <div className={styles.wrap_description}>
        <span className={classesSalary}>{salary}</span>
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
