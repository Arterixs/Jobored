import { SvgProps } from 'types/types/props';
import styles from './svg.module.css';

export const Svg = ({ id, className }: SvgProps) => (
  <svg className={styles[className]}>
    <use href={id} />
  </svg>
);
