import { CardJob } from 'components/card-job/Card-job';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { Search } from 'components/common/search/Search';
import { Pagination } from 'components/pagination/Pagination';
import { UseDataContext } from 'hooks/use-data-context';
import { CardWrapClasses } from 'types/enums/classes';
import styles from './main-page.module.css';

export const MainPage = () => {
  const { cardContent } = UseDataContext();
  return (
    <section className={styles.main_page}>
      <section className={styles.section}>
        <Search />
        <section className={styles.section}>
          {cardContent.map((item) => (
            <CardWrapper className={CardWrapClasses.CARD} key={item.id}>
              <CardJob
                location={item.town.title}
                title={item.profession}
                salaryFrom={item.payment_from}
                salaryTo={item.payment_to}
                currency={item.currency}
                conditions={item.type_of_work.title}
              />
            </CardWrapper>
          ))}
        </section>
      </section>
      <Pagination />
    </section>
  );
};
