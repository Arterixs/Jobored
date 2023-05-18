import { CardWrapper } from 'components/common/card-wrapper/Card-wrapper';
import { Search } from 'components/common/search/Search';
import styles from './main-page.module.css';

export const MainPage = () => (
  <section className={styles.section}>
    <Search />
    <section>
      <CardWrapper>
        <CardJob />
      </CardWrapper>
    </section>
  </section>
);
