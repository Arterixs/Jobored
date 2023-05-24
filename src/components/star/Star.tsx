import { SyntheticEvent, useState } from 'react';
import { Button } from 'components/common/button/Button';
import { Svg } from 'components/common/svg-element/Svg';
import { ButtonClasses, SvgClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { StarProps } from 'types/types/props';
import { deleteIdFavorite, setIdFavorite, checkIdFavorite } from 'utils/helpers/favorite';

export const Star = ({ id, changeStar }: StarProps) => {
  const [active, setActive] = useState(() => checkIdFavorite(id));
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(!active);
    if (active) {
      deleteIdFavorite(id);
    } else {
      setIdFavorite(id);
    }
    if (changeStar) changeStar();
  };
  return (
    <Button
      className={ButtonClasses.BTN_STAR}
      onClick={handleClick}
      star={active}
      dataElem={`vacancy-${id}-shortlist-button`}
    >
      <Svg id={SvgId.STAR} className={SvgClasses.STAR} />
    </Button>
  );
};
