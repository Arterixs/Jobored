import { ActionLoad } from 'types/enums/actions';
import { Store } from 'types/interface/store';
import { ActionsReducer } from 'types/types/actions';

export const reducer = (state: Store, action: ActionsReducer) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case ActionLoad.ERROR_LOAD:
      return { ...state, error: payload };
    case ActionLoad.LOADED:
      return { ...state, load: payload };
    case ActionLoad.COMMON:
      return { ...state, error: payload, load: payload };
    default:
      return state;
  }
};
