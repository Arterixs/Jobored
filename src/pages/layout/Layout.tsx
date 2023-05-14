import { Outlet } from 'react-router-dom';
import { Sprite } from '../../components/common/sprite/Sprite';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/Header';
import styles from './layout.module.css';

export const Layout = () => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.container}>
      <Outlet />
    </div>
    <Footer />
    <Sprite />
  </div>
);
