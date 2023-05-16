import { SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { Svg } from '../common/svg-element/Svg';
import styles from './logo.module.css';

export const LogoWrapper = () => (
  <section className={styles.wrapper}>
    <Svg id={SvgId.LOGO} className={SvgClasses.LOGO} />
    <h1 className={styles.title}>Jobored</h1>
  </section>
);
