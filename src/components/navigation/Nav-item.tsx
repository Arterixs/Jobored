import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { NavItemProps } from 'types/types/props';
import styles from './nav.module.css';

export const NavItem = ({ text, path }: NavItemProps) => (
  <li className={styles.list}>
    <NavLink className={({ isActive }) => (isActive ? clsx(styles.link, styles.active) : styles.link)} to={path}>
      {text}
    </NavLink>
  </li>
);
