import { ReactNode } from 'react';
import { CardWrapClasses } from '../enums/classes';

export interface CardWrapProps {
  children: ReactNode;
  className: CardWrapClasses;
}
