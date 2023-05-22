import { ActionLoad, ActionLoadInfo } from 'types/enums/actions';
import { ArrayVacancies, CatalogJobs } from 'types/interface/server';

export const ActionErrorLoad = (payload: boolean) => ({ type: ActionLoad.ERROR_LOAD, payload });
export const ActionStart = { type: ActionLoad.START, payload: 1 };
export const ActionEnd = { type: ActionLoad.END, payload: 1 };
export const ActionErr = (payload: boolean) => ({ type: ActionLoad.ERROR, payload });
export const ActionIndustry = (payload: CatalogJobs[]) => ({ type: ActionLoadInfo.SET_DIRECT_INDUSTRY, payload });
export const ActionVacanciess = (payload: ArrayVacancies[]) => ({ type: ActionLoadInfo.SET_LIST_VACANCIES, payload });
