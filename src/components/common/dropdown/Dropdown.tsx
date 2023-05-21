import { useState } from 'react';
import { clsx } from 'clsx';
import { DropDownProps } from 'types/interface/props';
import { useInfoContext } from 'hooks/use-info-context';
import { ButtonClasses, SvgClasses } from 'types/enums/classes';
import { InputText } from 'types/enums/text';
import { SvgId } from 'types/enums/svg';
import { Button } from '../button/Button';
import { Svg } from '../svg-element/Svg';
import styles from './dropdown.module.css';

export const Dropdown = ({ className, activeOption, value, setValue }: DropDownProps) => {
  const [state, setState] = useState(false);

  const {
    state: { directoryIndustry },
  } = useInfoContext();

  const classMenu = clsx({
    [styles.menu]: true,
    [styles.menu_hidden]: !state,
  });
  const refOption = activeOption;
  const toggleStateList = () => setState(!state);
  const clickOption = (valueStr: string, id: number) => {
    refOption.current = id;
    setValue(valueStr);
    toggleStateList();
  };
  return (
    <section className={styles.dropdown}>
      <div
        className={clsx(styles[className])}
        onClick={toggleStateList}
        aria-expanded={state ? 'true' : 'false'}
        role='combobox'
        onKeyDown={() => {}}
        aria-controls='industryTypes'
        id='industry'
        tabIndex={-1}
      >
        <span>{value}</span>
        {!value && <span className={styles.hint}>{InputText.DEFAULT}</span>}
        <Button className={ButtonClasses.BTN_ARR_BIG} flag={state} onClick={() => {}}>
          <Svg className={SvgClasses.ARROW_BIG} id={SvgId.ARROW_BIG} />
        </Button>
      </div>
      <ul id='industryTypes' role='listbox' aria-label='industry' className={classMenu}>
        {directoryIndustry.map(({ key, title_rus }) => {
          const inClicked = refOption.current === key;
          const classOption = clsx({
            [styles.option]: true,
            [styles.option_active]: inClicked,
          });
          return (
            <li
              role='option'
              aria-selected={inClicked ? 'true' : 'false'}
              className={classOption}
              onKeyDown={() => {}}
              onClick={() => clickOption(title_rus, key)}
              key={key}
            >
              {title_rus}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
