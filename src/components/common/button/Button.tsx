import { clsx } from 'clsx';
import { ButtonProps } from 'types/interface/props';
import styles from './button.module.css';

export const Button = ({ onClick, children, className, flag, disabled }: ButtonProps) => {
  const isArray = Array.isArray(className);
  const classes = isArray ? clsx(...className.map((item) => styles[item])) : styles[className];
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx({
        [styles.btn]: true,
        [classes]: true,
        [styles.turn]: flag,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
