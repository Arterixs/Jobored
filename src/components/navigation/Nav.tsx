import { UseMyContext } from 'hooks/Use-my-context';
import { NavItem } from './Nav-item';
import styles from './nav.module.css';

export const Nav = () => {
  const { navigation } = UseMyContext();
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
