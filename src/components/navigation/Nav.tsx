import { useContext } from 'react';
import { MyContext } from 'context/context-api';
import { NavItem } from './Nav-item';
import styles from './nav.module.css';

export const Nav = () => {
  const { navigation } = useContext(MyContext);
  return (
    <nav>
      <ul className={styles.ul}>
        {navigation.map(({ path, text, id }) => (
          <NavItem path={path} text={text} key={id} />
        ))}
      </ul>
    </nav>
  );
};
