import { clsx } from 'clsx';
import { useState } from 'react';
import { DropdownClasses } from 'types/enums/classes';
import styles from './dropdown.module.css';

export const Dropdown = ({
  className,
  classNameOptions,
  value,
  func,
}: {
  className: DropdownClasses;
  classNameOptions: DropdownClasses;
  value: string;
  func: (value: string) => void;
}) => {
  const [state, setState] = useState(false);
  const classMenu = clsx({
    [styles.menu]: true,
    [styles.menu_hidden]: !state,
  });

  const toggleState = () => setState(!state);
  const clickOptiom = (valueStr: string | null, elem: EventTarget) => {
    if (valueStr && elem instanceof HTMLLIElement) {
      func(valueStr);
      toggleState();
      elem.classList.add(styles.option_active);
    }
  };
  return (
    <section className={styles.dropdown}>
      <div
        className={clsx(styles[className])}
        onClick={toggleState}
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
        <li
          role='option'
          aria-selected='false'
          className={styles.option}
          onKeyDown={() => {}}
          onClick={(e) => clickOptiom(e.currentTarget.textContent, e.target)}
        >
          IT, интернет, связь, телеком
        </li>
        <li
          role='option'
          aria-selected='false'
          className={styles.option}
          onKeyDown={() => {}}
          onClick={(e) => clickOptiom(e.currentTarget.textContent, e.target)}
        >
          Кадры, управление персоналом
        </li>
        <li
          role='option'
          aria-selected='false'
          className={styles.option}
          onKeyDown={() => {}}
          onClick={(e) => clickOptiom(e.currentTarget.textContent, e.target)}
        >
          Искусство, культура, развлечения
        </li>
        <li
          role='option'
          aria-selected='false'
          className={styles.option}
          onKeyDown={() => {}}
          onClick={(e) => clickOptiom(e.currentTarget.textContent, e.target)}
        >
          Банки, инвестиции, лизинг
        </li>
        <li
          role='option'
          aria-selected='false'
          className={styles.option}
          onKeyDown={() => {}}
          onClick={(e) => clickOptiom(e.currentTarget.textContent, e.target)}
        >
          Дизайн
        </li>
        <li
          role='option'
          aria-selected='false'
          className={styles.option}
          onKeyDown={() => {}}
          onClick={(e) => clickOptiom(e.currentTarget.textContent, e.target)}
        >
          Hfefefe
        </li>
        <li
          role='option'
          aria-selected='false'
          className={styles.option}
          onKeyDown={() => {}}
          onClick={(e) => clickOptiom(e.currentTarget.textContent, e.target)}
        >
          adawdwa
        </li>
      </ul>
    </section>
  );
};
