import { memo } from 'react';
import { LogoWrapper } from './Logo';
import { Nav } from '../navigation/Nav';
import styles from './header.module.css';

export const Header = memo(() => (
  <header className={styles.header}>
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <LogoWrapper />
        <Nav />
      </div>
    </section>
  </header>
));
