import { Loader } from 'components/loader/Loader';
import { Outlet } from 'react-router-dom';
import { Sprite } from 'components/common/sprite/Sprite';
import { Footer } from 'components/footer/footer';
import { UseAuth } from 'hooks/Use-auth';
import { Header } from 'components/header/Header';

import styles from './layout.module.css';

export const Layout = () => {
  const value = UseAuth();
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{value ? <Outlet /> : <Loader />}</div>
      <Footer />
      <Sprite />
    </div>
  );
};
