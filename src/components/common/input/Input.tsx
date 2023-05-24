import { clsx } from 'clsx';
import { InputProps } from 'types/interface/props';
import styles from './input.module.css';

export const Input = ({ type, className, ...attrs }: InputProps) => (
  <input type={type} className={clsx(styles[className])} {...attrs} />
);
