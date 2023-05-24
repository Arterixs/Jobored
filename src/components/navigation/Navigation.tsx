import { useCallback, useState } from 'react';
import { Burger } from 'components/burger/Burger';
import { Nav } from './Nav';

export const Navigation = () => {
  const [state, setValue] = useState(false);
  const handleClick = () => setValue(!state);
  const handleClickClose = useCallback(() => setValue(false), []);
  return (
    <>
      <Nav state={state} handleClose={handleClickClose} />
      <Burger state={state} onClick={handleClick} />
    </>
  );
};
