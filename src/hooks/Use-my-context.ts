import { MyContext } from 'context/context-api';
import { useContext } from 'react';

export const UseMyContext = () => {
  const contextBody = useContext(MyContext);
  return contextBody;
};
