import { memo, useState } from 'react';
import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { useDataContext } from 'hooks/use-data-context';
import { getMaxPage } from 'utils/helpers/pagination';
import { ButtonClasses, SvgClasses } from 'types/enums/classes';
import { MagicNumbers } from 'types/enums/magic-numbers';
import { SvgId } from 'types/enums/svg';
import { PaginationProps } from 'types/interface/props';
import { ARRAY_BTN_PAGE } from 'utils/constants/magic-number';
import styles from './pagination.module.css';

export const Pagination = memo(({ funcPage, total }: PaginationProps) => {
  const [amountBtn, setBtn] = useState(ARRAY_BTN_PAGE);
  const [currentPage, setCurrentPage] = useState(MagicNumbers.ONE);
  const [disabledLeft, setDisabledLeft] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);
  const amountPages = getMaxPage(total);
  const { btnPages } = useDataContext();

  const handleControlPagination = (flag: boolean) => {
    const updateAmountPage = flag
      ? amountBtn.map((item) => item + MagicNumbers.ONE)
      : amountBtn.map((item) => item - MagicNumbers.ONE);
    const conditionRemoveDisabled = flag ? MagicNumbers.MIN_PAGE : amountPages;
    const conditionDisabled = flag ? amountPages : MagicNumbers.MIN_PAGE;
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
    funcPage(`${nextPage - MagicNumbers.ONE}`);
  };

  const handleClick = (numberPage: number) => {
    setCurrentPage(numberPage);
    funcPage(`${numberPage - MagicNumbers.ONE}`);
  };

  return (
    <div className={styles.wrap}>
      <Button
        className={ButtonClasses.BTN_PAGINATION}
        onClick={() => handleControlPagination(false)}
        disabled={disabledLeft}
      >
        <Svg id={SvgId.ARROW_NUM_UP} className={[SvgClasses.PAG_ARROW, SvgClasses.TURN_LEFT]} />
      </Button>
      {btnPages.map((item, index) => {
        const numberBtn = amountBtn[index];
        const isCurrent = currentPage === numberBtn;
        const classes = isCurrent
          ? [ButtonClasses.BTN_PAGINATION, ButtonClasses.BTN_PAGINATION_ACTIVE]
          : ButtonClasses.BTN_PAGINATION;
        const isDisabled = numberBtn > amountPages;
        if (isDisabled && !disabledRight) {
          setDisabledRight(true);
        }
        return (
          <Button className={classes} onClick={() => handleClick(numberBtn)} key={item.id} disabled={isDisabled}>
            <span>{amountBtn[index]}</span>
          </Button>
        );
      })}
      <Button
        className={ButtonClasses.BTN_PAGINATION}
        onClick={() => handleControlPagination(true)}
        disabled={disabledRight}
      >
        <Svg id={SvgId.ARROW_NUM_UP} className={[SvgClasses.PAG_ARROW, SvgClasses.TURN_RIGHT]} />
      </Button>
    </div>
  );
});
