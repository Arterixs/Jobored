import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CardJob } from 'components/card-job/Card-job';
import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { Routers } from 'types/enums/router';
import { Search } from 'components/common/search/Search';
import { EmptyPage } from 'pages/empty/empty-page';
import { TextContent } from 'types/enums/text';
import { Pagination } from 'components/pagination/Pagination';
import { CardWrapClasses } from 'types/enums/classes';
import { MainPageProps } from 'types/interface/props';
import styles from './main-page.module.css';

export const MainPage = memo(({ funcSearch, funcPage, listVacancies }: MainPageProps) => {
  const isCheckList = Boolean(listVacancies.length);
  return (
    <section className={styles.main_page}>
      <section className={styles.section}>
        <Search funcSearch={funcSearch} />
        {isCheckList ? (
          <section className={styles.section}>
            {listVacancies.map((item) => (
              <CardWrapper className={CardWrapClasses.CARD} key={item.id}>
                <Link to={`${Routers.VACANCY_PAGE}/${item.id}`} className={styles.link}>
                  <CardJob
                    location={item.town.title}
                    title={item.profession}
                    salaryFrom={item.payment_from}
                    salaryTo={item.payment_to}
                    currency={item.currency}
                    conditions={item.type_of_work.title}
                    id={item.id}
                  />
                </Link>
              </CardWrapper>
            ))}
          </section>
        ) : (
          <EmptyPage content={TextContent.SEARCH} />
        )}
      </section>
      {isCheckList && <Pagination funcPage={funcPage} />}
    </section>
  );
});
