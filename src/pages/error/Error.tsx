import { ErrorWrap } from 'components/common/error-message/Error-wrap';
import balloon from '../../assets/png/balloon.png';
import styles from './empty.module.css';

export const ErrorPage = () => (
  <main className={styles.main}>
    <section className={styles.section}>
      <ErrorWrap />
      <img className={styles.img} src={balloon} width={300} height={300} alt='Balloon' />
    </section>
  </main>
);
