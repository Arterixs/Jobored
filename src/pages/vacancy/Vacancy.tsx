import { useCallback, useMemo, useReducer, useState } from 'react';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { Filter } from 'components/filter/Filter';
import { MainPage } from 'components/main-page/Main-page';
import { CardWrapClasses } from 'types/enums/classes';
import { UseErrorContext } from 'hooks/use-loaded-context';
import { ContextInfo } from 'context/context-api';
import { useSendInformation } from 'hooks/use-send-info';
import { stateInfo } from 'store/states/state-info';
import { reducerInfo } from 'store/reducers/reducer-info';
import { useSendVacancies } from 'hooks/use-send-vacancies';
import styles from './vacancy.module.css';

const obj = {
  pageBtn: '0',
  filter: '',
  search: '',
};

export const Vacancy = () => {
  const [state, dispatch] = useReducer(reducerInfo, stateInfo);
  const [stateSend, setState] = useState(obj);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const dispatchServer = UseErrorContext().dispatch;

  const setFilterRequest = useCallback((value: string) => setState({ ...stateSend, filter: value }), [stateSend]);
  const setPageRequest = useCallback((value: string) => setState({ ...stateSend, pageBtn: value }), [stateSend]);
  const setSearchRequest = useCallback((value: string) => setState({ ...stateSend, search: value }), [stateSend]);
  console.log('render page');
  useSendInformation(dispatchServer, dispatch);
  useSendVacancies(dispatchServer, dispatch, stateSend);

  return (
    <main className={styles.main}>
      <ContextInfo.Provider value={contextValue}>
        <CardWrapper className={CardWrapClasses.FILTER}>
          <Filter funcRequest={setFilterRequest} />
        </CardWrapper>
        <MainPage funcSearch={setSearchRequest} funcPage={setPageRequest} />
      </ContextInfo.Provider>
    </main>
  );
};
