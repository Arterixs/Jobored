import { InputProps } from 'types/interface/props';

export const Input = ({ type, className, ...attrs }: InputProps) => (
  <input type={type} className={className} {...attrs} />
);
