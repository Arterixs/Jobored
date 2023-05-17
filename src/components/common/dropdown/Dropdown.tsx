import { useState } from 'react';
import { clsx } from 'clsx';
import { UseMyContext } from 'hooks/UseMyContext';
import { DropDownProps } from 'types/interface/props';
import styles from './dropdown.module.css';

export const Dropdown = ({ className, activeOption, value, func }: DropDownProps) => {
  const [state, setState] = useState(false);
  const refOption = activeOption;
  const { dropdownFilter } = UseMyContext();
  const classMenu = clsx({
    [styles.menu]: true,
    [styles.menu_hidden]: !state,
  });
  const toggleStateList = () => setState(!state);
  const clickOption = (valueStr: string, id: number) => {
    refOption.current = id;
    func(valueStr);
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
      </div>
      <ul id='industryTypes' role='listbox' aria-label='industry' className={classMenu}>
        {dropdownFilter.map(({ id, text }) => {
          const inClicked = refOption.current === id;
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
              onClick={() => clickOption(text, id)}
              key={id}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
