import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { useState } from 'react';
import { ButtonClasses, SvgClasses } from 'types/enums/classes';
import { MagicNumbers } from 'types/enums/magic-numbers';
import { SvgId } from 'types/enums/svg';
import { ARRAY_BTN_PAGE } from 'utils/constants/magic-number';
import styles from './pagination.module.css';

const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const Pagination = () => {
  const [amountBtn, setBtn] = useState(ARRAY_BTN_PAGE);
  const [currentPage, setCurrentPage] = useState(MagicNumbers.ONE);
  const [disabledLeft, setDisabledLeft] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);

  const handleClickArrow = (flag: boolean) => {
    const updateAmountPage = flag
      ? amountBtn.map((item) => item + MagicNumbers.ONE)
      : amountBtn.map((item) => item - MagicNumbers.ONE);
    const conditionRemoveDisabled = flag ? MagicNumbers.MIN_PAGE : MagicNumbers.MAX_PAGE;
    const conditionDisabled = flag ? MagicNumbers.MAX_PAGE : MagicNumbers.MIN_PAGE;
    const nextPage = flag ? currentPage + MagicNumbers.ONE : currentPage - MagicNumbers.ONE;
    if (updateAmountPage[MagicNumbers.LAST_PAGE_INDEX] !== conditionRemoveDisabled) {
      if (flag) {
        setDisabledLeft(false);
      } else {
        setDisabledRight(false);
      }
    }
    setBtn(updateAmountPage);
    setCurrentPage(nextPage);
    if (updateAmountPage[MagicNumbers.LAST_PAGE_INDEX] === conditionDisabled) {
      if (flag) {
        setDisabledRight(true);
      } else {
        setDisabledLeft(true);
      }
    }
  };
  const handleClick = (numberPage: number) => setCurrentPage(numberPage);
  return (
    <div className={styles.wrap}>
      <Button className={ButtonClasses.BTN_PAGINATION} onClick={() => handleClickArrow(false)} disabled={disabledLeft}>
        <Svg id={SvgId.ARROW_NUM_Up} className={[SvgClasses.PAG_ARROW, SvgClasses.TURN_LEFT]} />
      </Button>
      {arr.map((item, index) => {
        const numberBtn = amountBtn[index];
        const classes =
          currentPage === numberBtn
            ? [ButtonClasses.BTN_PAGINATION, ButtonClasses.BTN_PAGINATION_ACTIVE]
            : ButtonClasses.BTN_PAGINATION;
        return (
          <Button className={classes} onClick={() => handleClick(numberBtn)} key={item.id}>
            <span>{amountBtn[index]}</span>
          </Button>
        );
      })}
      <Button className={ButtonClasses.BTN_PAGINATION} onClick={() => handleClickArrow(true)} disabled={disabledRight}>
        <Svg id={SvgId.ARROW_NUM_Up} className={[SvgClasses.PAG_ARROW, SvgClasses.TURN_RIGHT]} />
      </Button>
    </div>
  );
};
