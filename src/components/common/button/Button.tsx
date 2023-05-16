import { clsx } from 'clsx';
import { ButtonProps } from 'types/interface/props';
import styles from './button.module.css';

export const Button = ({ onClick, children, className }: ButtonProps) => (
  <button type='button' onClick={onClick} className={clsx(styles.btn, styles[className])}>
    {children}
  </button>
);
