import { useState } from 'react';
import { ButtonClasses, SvgClasses } from 'types/enums/classes';
import { ServerCodeResponse } from 'types/enums/server';
import { SvgId } from 'types/enums/svg';
import { Button } from '../button/Button';
import { Svg } from '../svg-element/Svg';
import styles from './error-message.module.css';

export const ErrorMessage = () => {
  const [state, setState] = useState(true);
  const handleClick = () => setState(!state);
  return (
    <div className={styles.window}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Svg id={SvgId.ERROR} className={SvgClasses.ERROR_WIND} />
          <p className={styles.text}>{ServerCodeResponse.ERROR_TEXT}</p>
        </div>
        <Button className={ButtonClasses.BTN_CLOSE_WINDOW} onClick={handleClick}>
          <Svg id={SvgId.CLOSE} className={SvgClasses.CLOSE_WINDOW} />
        </Button>
      </div>
    </div>
  );
};
