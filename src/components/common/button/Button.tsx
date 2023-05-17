import { clsx } from 'clsx';
import { ButtonProps } from 'types/interface/props';
import styles from './button.module.css';

export const Button = ({ onClick, children, className, flag }: ButtonProps) => (
  <button
    type='button'
    onClick={onClick}
    className={clsx({
      [styles.btn]: true,
      [styles[className]]: true,
      [styles.turn]: flag,
    })}
  >
    {children}
  </button>
);
