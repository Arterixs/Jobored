import { clsx } from 'clsx';
import { CardWrapProps } from 'types/interface/props';
import styles from './card-wrapper.module.css';

export const CardWrapper = ({ children, className, job }: CardWrapProps) => {
  const classes = clsx({
    [styles.wrapper]: true,
    [styles[className]]: true,
    [styles.job]: job,
  });
  return <article className={classes}>{children}</article>;
};
