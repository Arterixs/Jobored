import { ActionLoadInfo } from 'types/enums/actions';
import { StateInfo } from 'types/interface/states';
import { ActionReducerInfo } from 'types/types/actions';

export const reducerInfo = (state: StateInfo, action: ActionReducerInfo) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case ActionLoadInfo.SET_DIRECT_INDUSTRY:
      return { ...state, directoryIndustry: payload };
    case ActionLoadInfo.SET_LIST_VACANCIES:
      return { ...state, listVacancies: payload };
    default:
      return state;
  }
};
