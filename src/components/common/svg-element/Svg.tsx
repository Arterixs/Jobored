import { clsx } from 'clsx';
import { SvgProps } from 'types/types/props';
import styles from './svg.module.css';

export const Svg = ({ id, className }: SvgProps) => {
  const isArray = Array.isArray(className);
  const classes = isArray ? clsx(...className.map((item) => styles[item])) : styles[className];
  return (
    <svg className={classes}>
      <use href={id} />
    </svg>
  );
};
