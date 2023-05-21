import { useCallback, useState } from 'react';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { StateVacFilter } from 'types/interface/states';
import { Filter } from 'components/filter/Filter';
import { MainPage } from 'components/main-page/Main-page';
import { CardWrapClasses } from 'types/enums/classes';
import { UseErrorContext } from 'hooks/use-loaded-context';
import { useSendInformation } from 'hooks/use-send-info';
import styles from './vacancy.module.css';

export const Vacancy = () => {
  const { dispatch } = UseErrorContext();
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
  useSendInformation(dispatch);
  console.log('render page');
  return (
    <main className={styles.main}>
      <CardWrapper className={CardWrapClasses.FILTER}>
        <Filter setDataFilter={setDataFilter} />
      </CardWrapper>
      <MainPage />
    </main>
  );
};
