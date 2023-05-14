import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

export const Nav = () => (
  <nav>
    <ul className={styles.ul}>
      <li className={styles.list}>
        <NavLink className={styles.link} to=''>
          Поиск Вакансий
        </NavLink>
      </li>
      <li className={styles.list}>
        <NavLink className={styles.link} to=''>
          Избранное
        </NavLink>
      </li>
    </ul>
  </nav>
);
