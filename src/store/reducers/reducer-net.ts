import { ActionLoad } from 'types/enums/actions';
import { Store } from 'types/interface/states';
import { ActionsReducer } from 'types/types/actions';

export const reducerNet = (state: Store, action: ActionsReducer) => {
  const { type, payload } = action;
  switch (type) {
    case ActionLoad.ERROR_LOAD:
      return { ...state, error: payload };
    case ActionLoad.START:
      return { ...state, countLoaders: state.countLoaders + payload };
    case ActionLoad.END:
      return { ...state, countLoaders: state.countLoaders - payload };
    case ActionLoad.ERROR:
      return { ...state, error: payload, countLoaders: state.countLoaders - 1 };
    default:
      return state;
  }
};
