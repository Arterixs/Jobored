import { UseDataContext } from 'hooks/use-data-context';
import { NavItem } from './Nav-item';
import styles from './nav.module.css';

export const Nav = () => {
  const { navigation } = UseDataContext();
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
