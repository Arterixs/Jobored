import {
  ActionCommon,
  ActionEnd,
  ActionError,
  ActionIndustry,
  ActionStart,
  ActionVacancies,
} from 'types/interface/actions';

export type ActionsReducer = ActionError | ActionStart | ActionEnd | ActionCommon;
export type ActionReducerInfo = ActionIndustry | ActionVacancies;
