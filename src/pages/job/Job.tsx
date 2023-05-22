import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardJob } from 'components/card-job/Card-job';
import { getIdVacancy } from 'utils/helpers/job';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { UseErrorContext } from 'hooks/use-loaded-context';
import { useSendJob } from 'hooks/use-send-job';
import { CardWrapClasses } from 'types/enums/classes';
import { ArrayVacancies } from 'types/interface/server';
import styles from './job.module.css';

export const Job = () => {
  const [obj, setArray] = useState<ArrayVacancies>();
  const changeArray = useCallback((arr: ArrayVacancies) => setArray({ ...arr }), []);
  const { dispatch } = UseErrorContext();
  const { pathname } = useLocation();
  const idVacancy = getIdVacancy(pathname);
  useSendJob(dispatch, setArray, idVacancy);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {obj && (
            <section className={styles.section}>
              <CardWrapper className={CardWrapClasses.CARD} key={obj.id} job>
                <CardJob
                  location={obj.town.title}
                  title={obj.profession}
                  salaryFrom={obj.payment_from}
                  salaryTo={obj.payment_to}
                  currency={obj.currency}
                  conditions={obj.type_of_work.title}
                  id={obj.id}
                  job
                />
              </CardWrapper>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};
