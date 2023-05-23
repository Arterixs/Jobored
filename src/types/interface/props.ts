import { ReactNode, SyntheticEvent } from 'react';
import { TypeInput } from 'types/types/type-elem';
import { ButtonClasses, CardWrapClasses, DropdownClasses, InputClasses } from '../enums/classes';
import { ArrayVacancies } from './server';

export interface CardWrapProps {
  children: ReactNode;
  className: CardWrapClasses;
  job?: boolean;
}

export interface ButtonProps {
  onClick: (e: SyntheticEvent) => void;
  children: JSX.Element;
  className: ButtonClasses | ButtonClasses[];
  flag?: boolean;
  disabled?: boolean;
  star?: boolean;
  dataElem?: string;
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

export interface MainPageProps {
  funcSearch: (value: string) => void;
  funcPage: (value: string) => void;
  listVacancies: ArrayVacancies[];
}
