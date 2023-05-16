import { useState } from 'react';
import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { Input } from 'components/common/input/Input';
import { ButtonClasses, InputClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { FiltBlock } from './Filt-block';
import styles from './filter.module.css';

export const Filter = ({ func }: { func: (job: string, salaryFr: string, salaryUp: string) => void }) => {
  const [valueJob, setValueJob] = useState('');
  const [SalaryFr, setSalaryFr] = useState('');
  const [SalaryUp, setSalaryUp] = useState('');
  const changeFr = (e: React.ChangeEvent<HTMLInputElement>) => setSalaryFr(e.target.value);
  const changeUp = (e: React.ChangeEvent<HTMLInputElement>) => setSalaryUp(e.target.value);
  const reset = () => {
    setValueJob('');
    setSalaryFr('');
    setSalaryUp('');
  };
  const handle = () => {
    func(valueJob, SalaryFr, SalaryUp);
  };
  return (
    <section className={styles.filter}>
      <section className={styles['wrapper-reset']}>
        <h2 className={styles.title}>Фильтры</h2>
        <div className={styles['btn-wrap']}>
          <Button onClick={reset} className={ButtonClasses.BTN_RESET}>
            <span>Сбросить всё</span>
          </Button>
          <Svg id={SvgId.CLOSE} className={SvgClasses.CLOSE} />
        </div>
      </section>
      <div className={styles['wrapper-input']}>
        <FiltBlock title='Отрасль'>
          <Input type='text' className={InputClasses.FILTER} />
        </FiltBlock>
        <FiltBlock title='Оклад'>
          <Input type='number' className={InputClasses.FILTER} value={SalaryFr} onChange={changeFr} placeholder='От' />
          <Input type='number' className={InputClasses.FILTER} value={SalaryUp} onChange={changeUp} placeholder='До' />
        </FiltBlock>
        <Button onClick={handle} className={ButtonClasses.BTN_APPLY}>
          <span>Применить</span>
        </Button>
      </div>
    </section>
  );
};
