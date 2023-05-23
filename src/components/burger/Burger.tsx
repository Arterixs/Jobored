import clsx from 'clsx';
import { Button } from 'components/common/button/Button';
import { ButtonClasses } from 'types/enums/classes';
import { BurgerProps } from 'types/interface/props';
import { changeClassBody } from 'utils/helpers/burger';
import styles from './burger.module.css';

export const Burger = ({ state, onClick }: BurgerProps) => {
  const classes = clsx({
    [styles.span]: true,
    [styles.span_active]: state,
  });
  changeClassBody(state);
  return (
    <Button className={ButtonClasses.BTN_BURGER} onClick={onClick} burgerState={state}>
      <span className={classes} />
    </Button>
  );
};
