import { MyContext } from 'context/context-api';
import { useContext } from 'react';

export const useDataContext = () => {
  const contextBody = useContext(MyContext);
  return contextBody;
};
