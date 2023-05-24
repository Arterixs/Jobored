import { Context } from 'context/context-api';
import { useContext } from 'react';

export const useErrorContext = () => {
  const contextBody = useContext(Context);
  if (contextBody) {
    return contextBody;
  }
  throw Error('Context is empty');
};
