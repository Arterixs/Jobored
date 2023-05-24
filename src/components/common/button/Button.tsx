import { clsx } from 'clsx';
import { ButtonProps } from 'types/interface/props';
import styles from './button.module.css';

export const Button = ({ onClick, children, className, flag, disabled, star, dataElem, burgerState }: ButtonProps) => {
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
        [styles['btn_star-active']]: star,
        [styles.btn_burger_active]: burgerState,
      })}
      disabled={disabled}
      data-elem={dataElem}
    >
      {children}
    </button>
  );
};
