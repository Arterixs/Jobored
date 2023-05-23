import { useNavigate } from 'react-router-dom';
import { Button } from 'components/common/button/Button';
import { ButtonClasses } from 'types/enums/classes';
import { Routers } from 'types/enums/router';
import { EmptyProps } from 'types/types/props';
import { TextButton } from 'types/enums/text';
import search from 'assets/png/search.png';
import styles from './empty-page.module.css';

export const EmptyPage = ({ content }: EmptyProps) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(Routers.VACANCY_PAGE);
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img src={search} alt='Detective' width={240} height={230} />
        <p className={styles.text}>{content}</p>
        <Button className={ButtonClasses.BTN_FIND} onClick={handleClick}>
          <span>{TextButton.EMPTY}</span>
        </Button>
      </section>
    </div>
  );
};
