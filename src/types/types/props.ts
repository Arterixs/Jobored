import { SvgClasses } from 'types/enums/classes';
import { CardJobProperty } from 'types/interface/context';
import { MainPageProps } from 'types/interface/props';
import { Nav } from '../interface/nav';

export type NavItemProps = Omit<Nav, 'id'>;

export type SvgProps = { id: string; className: SvgClasses | SvgClasses[] };

export type SearchProps = Omit<MainPageProps, 'funcPage'>;
export type PaginationProps = Omit<MainPageProps, 'funcSearch'>;
export type FilterProps = { funcRequest: (value: string) => void };
export type StarProps = Pick<CardJobProperty, 'id'>;
