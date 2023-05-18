import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { ButtonClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import styles from './pagination.module.css';

export const Pagination = () => (
  <div className={styles.wrap}>
    <Button className={ButtonClasses.BTN_PAGINATION} onClick={() => {}} disabled>
      <Svg id={SvgId.ARROW_NUM_Up} className={[SvgClasses.PAG_ARROW, SvgClasses.TURN_LEFT]} />
    </Button>
    <Button className={[ButtonClasses.BTN_PAGINATION, ButtonClasses.BTN_PAGINATION_ACTIVE]} onClick={() => {}}>
      <span>1</span>
    </Button>
    <Button className={ButtonClasses.BTN_PAGINATION} onClick={() => {}}>
      <span>2</span>
    </Button>
    <Button className={ButtonClasses.BTN_PAGINATION} onClick={() => {}}>
      <span>3</span>
    </Button>
    <Button className={[ButtonClasses.BTN_PAGINATION, ButtonClasses.BTN_PAGINATION_ENABLE]} onClick={() => {}}>
      <Svg id={SvgId.ARROW_NUM_Up} className={[SvgClasses.PAG_ARROW, SvgClasses.TURN_RIGHT]} />
    </Button>
  </div>
);
