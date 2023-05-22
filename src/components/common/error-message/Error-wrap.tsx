import { useState } from 'react';
import { ErrorMessage } from './Error-message';

export const ErrorWrap = () => {
  const [state, updateState] = useState(true);
  const handleClick = () => updateState(!state);

  return <ErrorMessage state={state} handleClick={handleClick} />;
};
