import { useState } from 'react';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { Filter } from 'components/filter/Filter';
import { CardWrapClasses } from 'types/enums/classes';
import styles from './vacancy.module.css';

interface State {
  job: string;
  salaryFr: string;
  salaryUp: string;
}

export const Vacancy = () => {
  const [value, setValue] = useState<State>({
    job: '',
    salaryFr: '',
    salaryUp: '',
  });
  const handler = (job: string, salaryFr: string, salaryUp: string) => {
    setValue({
      job,
      salaryFr,
      salaryUp,
    });
  };
  console.log(value, 'render vac');
  return (
    <main className={styles.main}>
      <CardWrapper className={CardWrapClasses.FILTER}>
        <Filter func={handler} />
      </CardWrapper>
    </main>
  );
};
