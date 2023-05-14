import { SvgId } from '../../types/enums/svg';
import { Svg } from '../common/svg-element/Svg';
import styles from './logo.module.css';

export const LogoWrapper = () => (
  <section className={styles.wrapper}>
    <Svg id={SvgId.LOGO} />
    <h1 className={styles.title}>Jobored</h1>
  </section>
);
