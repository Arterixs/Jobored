import { ActionLoadInfo } from 'types/enums/actions';
import { ArrayVacancies, CatalogJobs } from 'types/interface/server';

export const ActionIndustry = (payload: CatalogJobs[]) => ({ type: ActionLoadInfo.SET_DIRECT_INDUSTRY, payload });
export const ActionVacanciess = (payload: ArrayVacancies[]) => ({ type: ActionLoadInfo.SET_LIST_VACANCIES, payload });
