import { UseErrorContext } from 'hooks/use-loaded-context';
import { ActionErrorLoad } from 'store/actions';
import { ErrorMessage } from './Error-message';

export const ErrorWrap = () => {
  const { dispatch, state } = UseErrorContext();
  const handleClick = () => dispatch(ActionErrorLoad(false));

  return <ErrorMessage state={state.error} handleClick={handleClick} />;
};
