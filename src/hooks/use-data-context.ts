import { MyContext } from 'context/context-api';
import { useContext } from 'react';

export const UseDataContext = () => {
  const contextBody = useContext(MyContext);
  return contextBody;
};
