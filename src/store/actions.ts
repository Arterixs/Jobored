import { ActionLoad, ActionLoadInfo } from 'types/enums/actions';
import { ArrayVacancies, CatalogJobs } from 'types/interface/server';

export const ActionErrorLoad = (payload: boolean) => ({ type: ActionLoad.ERROR_LOAD, payload });
export const ActionLoaded = (payload: boolean) => ({ type: ActionLoad.LOADED, payload });
export const ActionCommon = (payload: boolean) => ({ type: ActionLoad.COMMON, payload });
export const ActionIndustry = (payload: CatalogJobs[]) => ({ type: ActionLoadInfo.SET_DIRECT_INDUSTRY, payload });
export const ActionVacanciess = (payload: ArrayVacancies[]) => ({ type: ActionLoadInfo.SET_LIST_VACANCIES, payload });
