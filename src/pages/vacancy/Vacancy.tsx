import { useCallback, useMemo, useReducer, useState } from 'react';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { StateVacFilter } from 'types/interface/states';
import { Filter } from 'components/filter/Filter';
import { MainPage } from 'components/main-page/Main-page';
import { CardWrapClasses } from 'types/enums/classes';
import { UseErrorContext } from 'hooks/use-loaded-context';
import { ContextInfo } from 'context/context-api';
import { useSendInformation } from 'hooks/use-send-info';
import { stateInfo } from 'store/states/state-info';
import { reducerInfo } from 'store/reducers/reducer-info';
import styles from './vacancy.module.css';

export const Vacancy = () => {
  const [state, dispatch] = useReducer(reducerInfo, stateInfo);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const dispatchServer = UseErrorContext().dispatch;
  const [value, setValue] = useState<StateVacFilter>({
    job: '',
    salaryFr: '',
    salaryUp: '',
  });
  const setDataFilter = useCallback((job: string, salaryFr: string, salaryUp: string) => {
    setValue({
      job,
      salaryFr,
      salaryUp,
    });
  }, []);
  useSendInformation(dispatchServer, dispatch);
  return (
    <main className={styles.main}>
      <ContextInfo.Provider value={contextValue}>
        <CardWrapper className={CardWrapClasses.FILTER}>
          <Filter setDataFilter={setDataFilter} />
        </CardWrapper>
        <MainPage />
      </ContextInfo.Provider>
    </main>
  );
};
