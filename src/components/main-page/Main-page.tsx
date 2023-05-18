import { CardJob } from 'components/card-job/Card-job';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { Search } from 'components/common/search/Search';
import { Pagination } from 'components/pagination/Pagination';
import { UseMyContext } from 'hooks/UseMyContext';
import { CardWrapClasses } from 'types/enums/classes';
import styles from './main-page.module.css';

export const MainPage = () => {
  const { cardContent } = UseMyContext();
  return (
    <section className={styles.main_page}>
      <section className={styles.section}>
        <Search />
        <section className={styles.section}>
          {cardContent.map(({ location, title, id, salary, conditions }) => (
            <CardWrapper className={CardWrapClasses.CARD} key={id}>
              <CardJob location={location} title={title} salary={salary} conditions={conditions} />
            </CardWrapper>
          ))}
        </section>
      </section>
      <Pagination />
    </section>
  );
};
