import { ReactNode } from 'react';
import { TypeInput } from 'types/types/type-elem';
import { ButtonClasses, CardWrapClasses, DropdownClasses, InputClasses } from '../enums/classes';

export interface CardWrapProps {
  children: ReactNode;
  className: CardWrapClasses;
}

export interface ButtonProps {
  onClick: () => void;
  children: JSX.Element;
  className: ButtonClasses | ButtonClasses[];
  flag?: boolean;
  disabled?: boolean;
}

export interface InputProps {
  className: InputClasses;
  type: TypeInput;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}

export interface DropDownProps {
  className: DropdownClasses;
  value: string;
  activeOption: React.MutableRefObject<number>;
  setValue: (value: string, key: string) => void;
}
