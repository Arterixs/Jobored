import { SvgClasses } from 'types/enums/classes';
import { Nav } from '../interface/nav';

export type NavItemProps = Omit<Nav, 'id'>;

export type SvgProps = { id: string; className: SvgClasses | SvgClasses[] };
