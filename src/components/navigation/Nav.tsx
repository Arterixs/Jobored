import { SyntheticEvent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useDataContext } from 'hooks/use-data-context';
import { NaviProps } from 'types/interface/props';
import { NavItem } from './Nav-item';
import styles from './nav.module.css';

export const Nav = ({ state, handleClose }: NaviProps) => {
  const { navigation } = useDataContext();
  const location = useLocation();
  const classesNav = clsx({
    [styles.nav]: true,
    [styles.nav_open]: state,
    [styles.nav_close]: !state,
  });
  const classesWrap = clsx({
    [styles.nav_wrap]: true,
    [styles.nav_wrap_open]: state,
    [styles.nav_wrap_close]: !state,
  });

  useEffect(() => {
    handleClose();
  }, [location, handleClose]);

  const clickShadow = (e: SyntheticEvent) => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  return (
    <div className={classesWrap} onClick={clickShadow} onKeyDown={() => {}} role='button' tabIndex={-1}>
      <nav className={classesNav}>
        <ul className={styles.ul}>
          {navigation.map(({ path, text, id }) => (
            <NavItem path={path} text={text} key={id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
