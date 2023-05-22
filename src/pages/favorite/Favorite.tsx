import { CardJob } from 'components/card-job/Card-job';
import { useCallback, useState } from 'react';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { CardWrapClasses } from 'types/enums/classes';
import { ArrayVacancies } from 'types/interface/server';
import { useSendFavor } from 'hooks/use-send-favor';
import { Pagination } from 'components/pagination/Pagination';
import { UseErrorContext } from 'hooks/use-loaded-context';
import styles from './favorite.module.css';

export const VacanciesPage = () => {
  const [array, setArray] = useState<ArrayVacancies[]>([]);
  const { dispatch } = UseErrorContext();
  const changeArray = useCallback((arr: ArrayVacancies[]) => setArray(arr), []);
  useSendFavor(dispatch, changeArray);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <section className={styles.section}>
            {array.map((item) => (
              <CardWrapper className={CardWrapClasses.CARD} key={item.id}>
                <CardJob
                  location={item.town.title}
                  title={item.profession}
                  salaryFrom={item.payment_from}
                  salaryTo={item.payment_to}
                  currency={item.currency}
                  conditions={item.type_of_work.title}
                  id={item.id}
                />
              </CardWrapper>
            ))}
          </section>
          <Pagination funcPage={() => {}} />
        </div>
      </div>
    </main>
  );
};
