import { clsx } from 'clsx';
import { CardWrapProps } from 'types/interface/props';
import styles from './card-wrapper.module.css';

export const CardWrapper = ({ children, className, job, state }: CardWrapProps) => {
  const isState = state === false;
  const classes = clsx({
    [styles.wrapper]: true,
    [styles[className]]: true,
    [styles.job]: job,
    [styles.filter_open]: state,
    [styles.filter_close]: isState,
  });
  return <article className={classes}>{children}</article>;
};
