import { memo } from 'react';
import { ErrorMessage } from 'components/common/error-message/Error-message';
import { LogoWrapper } from './Logo';
import { Nav } from '../navigation/Nav';
import styles from './header.module.css';

export const Header = memo(() => (
  <header className={styles.header}>
    <section className={styles.wrapper}>
      {/* <ErrorMessage /> */}
      <div className={styles.container}>
        <LogoWrapper />
        <Nav />
      </div>
    </section>
  </header>
));
