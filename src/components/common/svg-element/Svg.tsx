import { SvgProps } from 'types/types/props';
import styles from './svg.module.css';

export const Svg = ({ id }: SvgProps) => (
  <svg className={styles.logo}>
    <use href={id} />
  </svg>
);
