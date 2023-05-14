import { LogoWrapper } from './Logo';
import { Nav } from './Nav';
import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <LogoWrapper />
        <Nav />
      </div>
    </section>
  </header>
);
