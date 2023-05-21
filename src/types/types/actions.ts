import { ActionCommon, ActionError, ActionIndustry, ActionLoaded, ActionVacancies } from 'types/interface/actions';

export type ActionsReducer = ActionError | ActionLoaded | ActionCommon;
export type ActionReducerInfo = ActionIndustry | ActionVacancies;
