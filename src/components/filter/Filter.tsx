import { useState } from 'react';
import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { Input } from 'components/common/input/Input';
import { Wrapper } from 'components/common/component-wrapper/Wrapper';
import { ButtonClasses, InputClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { FiltBlock } from './Filt-block';
import styles from './filter.module.css';

export const Filter = ({ func }: { func: (job: string, salaryFr: string, salaryUp: string) => void }) => {
  const [valueJob, setValueJob] = useState('');
  const [salaryFr, setSalaryFr] = useState('');
  const [salaryUp, setSalaryUp] = useState('');
  const changeFr = (e: React.ChangeEvent<HTMLInputElement>) => setSalaryFr(e.target.value);
  const changeUp = (e: React.ChangeEvent<HTMLInputElement>) => setSalaryUp(e.target.value);
  const click = (value: string, setter: (s: string) => void, direction: boolean) => {
    const convertValue = Number(value);
    if (convertValue > 1 || direction) {
      const summ = direction ? convertValue + 1 : convertValue - 1;
      setter(`${summ}`);
    } else {
      setter('');
    }
  };
  const reset = () => {
    setValueJob('');
    setSalaryFr('');
    setSalaryUp('');
  };
  const handle = () => {
    func(valueJob, salaryFr, salaryUp);
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
          <Wrapper>
            <Input
              type='number'
              className={InputClasses.FILTER}
              value={salaryFr}
              onChange={changeFr}
              placeholder='От'
            />
            <div className={styles['wrapper-btn']}>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => click(salaryFr, setSalaryFr, true)}>
                <Svg className={SvgClasses.ARROW_NUM} id={SvgId.ARROW_NUM_Up} />
              </Button>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => click(salaryFr, setSalaryFr, false)}>
                <Svg className={SvgClasses.ARROW_NUM} id={SvgId.ARROW_NUM_DOWN} />
              </Button>
            </div>
          </Wrapper>
          <Wrapper>
            <Input
              type='number'
              className={InputClasses.FILTER}
              value={salaryUp}
              onChange={changeUp}
              placeholder='До'
            />
            <div className={styles['wrapper-btn']}>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => click(salaryUp, setSalaryUp, true)}>
                <Svg className={SvgClasses.ARROW_NUM} id={SvgId.ARROW_NUM_Up} />
              </Button>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => click(salaryUp, setSalaryUp, false)}>
                <Svg className={SvgClasses.ARROW_NUM} id={SvgId.ARROW_NUM_DOWN} />
              </Button>
            </div>
          </Wrapper>
        </FiltBlock>
        <Button onClick={handle} className={ButtonClasses.BTN_APPLY}>
          <span>Применить</span>
        </Button>
      </div>
    </section>
  );
};
