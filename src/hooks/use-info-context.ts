import { ContextInfo } from 'context/context-api';
import { useContext } from 'react';

export const useInfoContext = () => {
  const contextBody = useContext(ContextInfo);
  if (contextBody) {
    return contextBody;
  }
  throw Error('Context is empty');
};
