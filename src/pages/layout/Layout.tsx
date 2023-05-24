import { Loader } from 'components/loader/Loader';
import { Outlet } from 'react-router-dom';
import { Sprite } from 'components/common/sprite/Sprite';
import { Footer } from 'components/footer/Footer';
import { useSendAuth } from 'hooks/use-send-auth';
import { Header } from 'components/header/Header';
import { useMemo, useReducer } from 'react';
import { reducerNet } from 'store/reducers/reducer-net';
import { stateNet } from 'store/states/state-net';
import { Context } from 'context/context-api';
import { ErrorPage } from 'pages/error/Error';
import styles from './layout.module.css';

export const Layout = () => {
  const [state, dispatch] = useReducer(reducerNet, stateNet);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  useSendAuth(dispatch);
  const flagLoader = Boolean(state.countLoaders);
  return (
    <div className={styles.wrapper}>
      <Context.Provider value={contextValue}>
        {flagLoader && <Loader />}
        <Header />
        <div className={styles.container}>{state.error ? <ErrorPage /> : <Outlet />}</div>
      </Context.Provider>
      <Footer />
      <Sprite />
    </div>
  );
};
