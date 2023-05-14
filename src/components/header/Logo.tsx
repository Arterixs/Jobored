import { Svg } from '../common/svg-element/Svg';
import styles from './logo.module.css';

export const LogoWrapper = () => (
  <section className={styles.wrapper}>
    <Svg id='#logo' />
    <h1 className={styles.title}>Jobored</h1>
  </section>
);
