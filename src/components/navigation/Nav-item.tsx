import { NavLink } from 'react-router-dom';
import { NavItemProps } from '../../types/types/props';
import styles from './nav.module.css';

export const NavItem = ({ text, path }: NavItemProps) => (
  <li className={styles.list}>
    <NavLink className={styles.link} to={path}>
      {text}
    </NavLink>
  </li>
);
