import { clsx } from 'clsx';
import { CardWrapProps } from 'types/interface/props';
import styles from './card-wrapper.module.css';

export const CardWrapper = ({ children, className }: CardWrapProps) => {
  const classes = clsx(styles.wrapper, styles[className]);
  return <article className={classes}>{children}</article>;
};
