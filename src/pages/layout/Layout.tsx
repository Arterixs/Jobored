import { Loader } from 'components/loader/Loader';
import { Outlet } from 'react-router-dom';
import { Sprite } from 'components/common/sprite/Sprite';
import { Footer } from 'components/footer/footer';
import { useSendAuth } from 'hooks/use-send-auth';
import { Header } from 'components/header/Header';
import { useMemo, useReducer } from 'react';
import { reducer } from 'store/reducer';
import { store } from 'store/store';
import { Context } from 'context/context-api';
import styles from './layout.module.css';

export const Layout = () => {
  const [state, dispatch] = useReducer(reducer, store);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  useSendAuth(dispatch);
  console.log('render lauoty');
  return (
    <div className={styles.wrapper}>
      <Context.Provider value={contextValue}>
        {!state.load && <Loader />}
        <Header />
        <div className={styles.container}>
          <Outlet />
        </div>
      </Context.Provider>
      <Footer />
      <Sprite />
    </div>
  );
};
