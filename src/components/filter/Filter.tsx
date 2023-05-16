import { useState } from 'react';
import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { MagicNumbers } from 'types/enums/magic-numbers';
import { clickNumArrow } from 'utils/helpers/filter';
import { Input } from 'components/common/input/Input';
import { Wrapper } from 'components/common/component-wrapper/Wrapper';
import { FilterText, TextButton } from 'types/enums/text';
import { ButtonClasses, InputClasses, SvgClasses } from 'types/enums/classes';
import { FilterProps } from 'types/interface/props';
import { SvgId } from 'types/enums/svg';
import { FiltBlock } from './Filt-block';
import styles from './filter.module.css';

export const Filter = ({ setDataFilter }: FilterProps) => {
  const [valueJob, setValueJob] = useState('');
  const [salaryFr, setSalaryFr] = useState('');
  const [salaryUp, setSalaryUp] = useState('');
  const changeFr = (e: React.ChangeEvent<HTMLInputElement>) => setSalaryFr(e.target.value);
  const changeUp = (e: React.ChangeEvent<HTMLInputElement>) => setSalaryUp(e.target.value);
  const reset = () => {
    setValueJob('');
    setSalaryFr('');
    setSalaryUp('');
  };
  const applyClick = () => setDataFilter(valueJob, salaryFr, salaryUp);
  return (
    <section className={styles.filter}>
      <section className={styles['wrapper-reset']}>
        <h2 className={styles.title}>{FilterText.FILTER}</h2>
        <div className={styles['btn-wrap']}>
          <Button onClick={reset} className={ButtonClasses.BTN_RESET}>
            <span>{TextButton.RESET}</span>
          </Button>
          <Svg id={SvgId.CLOSE} className={SvgClasses.CLOSE} />
        </div>
      </section>
      <div className={styles['wrapper-input']}>
        <FiltBlock title={FilterText.INDUSTRY}>
          <Input type='text' className={InputClasses.FILTER} />
        </FiltBlock>
        <FiltBlock title={FilterText.SALARY}>
          <Wrapper>
            <Input
              type='number'
              className={InputClasses.FILTER}
              value={salaryFr}
              onChange={changeFr}
              placeholder={FilterText.FROM}
            />
            <div className={styles['wrapper-btn']}>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => clickNumArrow(salaryFr, setSalaryFr, true)}>
                <Svg className={SvgClasses.ARROW_NUM} id={SvgId.ARROW_NUM_Up} />
              </Button>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => clickNumArrow(salaryFr, setSalaryFr, false)}>
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
              placeholder={FilterText.UP}
            />
            <div className={styles['wrapper-btn']}>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => clickNumArrow(salaryUp, setSalaryUp, true)}>
                <Svg className={SvgClasses.ARROW_NUM} id={SvgId.ARROW_NUM_Up} />
              </Button>
              <Button className={ButtonClasses.BTN_ARR_NUM} onClick={() => clickNumArrow(salaryUp, setSalaryUp, false)}>
                <Svg className={SvgClasses.ARROW_NUM} id={SvgId.ARROW_NUM_DOWN} />
              </Button>
            </div>
          </Wrapper>
        </FiltBlock>
        <Button onClick={applyClick} className={ButtonClasses.BTN_APPLY}>
          <span>{TextButton.APPLY}</span>
        </Button>
      </div>
    </section>
  );
};
