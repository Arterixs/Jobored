import { memo } from 'react';
import { Navigation } from 'components/navigation/Navigation';
import { LogoWrapper } from './Logo';
import styles from './header.module.css';

export const Header = memo(() => (
  <header className={styles.header}>
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <LogoWrapper />
        <Navigation />
      </div>
    </section>
  </header>
));
