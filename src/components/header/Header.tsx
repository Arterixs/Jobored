import { memo } from 'react';
import { ErrorWrap } from 'components/common/error-message/Error-wrap';
import { LogoWrapper } from './Logo';
import { Nav } from '../navigation/Nav';
import styles from './header.module.css';

export const Header = memo(() => (
  <header className={styles.header}>
    <section className={styles.wrapper}>
      <ErrorWrap />
      <div className={styles.container}>
        <LogoWrapper />
        <Nav />
      </div>
    </section>
  </header>
));
