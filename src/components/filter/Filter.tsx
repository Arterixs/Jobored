import { useState } from 'react';
import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { Input } from 'components/common/input/Input';
import { ButtonClasses, InputClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { FiltBlock } from './Filt-block';

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
    <section>
      <div>
        <h2>Фильтры</h2>
        <div>
          <Button onClick={reset} className={ButtonClasses.BTN_RESET}>
            <span>Сбросить всё</span>
          </Button>
          <Svg id={SvgId.CLOSE} className={SvgClasses.CLOSE} />
        </div>
      </div>
      <FiltBlock title='Отрасль'>
        <Input type='text' className={InputClasses.TEXT} />
        <input type='text' />
      </FiltBlock>
      <FiltBlock title='Оклад'>
        <Input type='number' className={InputClasses.NUMBER} value={SalaryFr} onChange={changeFr} placeholder='От' />
        <Input type='number' className={InputClasses.NUMBER} value={SalaryUp} onChange={changeUp} placeholder='До' />
      </FiltBlock>
      <Button onClick={handle} className={ButtonClasses.BTN_APPLY}>
        <span>Применить</span>
      </Button>
    </section>
  );
};
