import { ActionLoad, ActionLoadInfo } from 'types/enums/actions';
import { ArrayVacancies, CatalogJobs } from './server';

export interface ActionError {
  type: ActionLoad.ERROR_LOAD;
  payload: boolean;
}

export interface ActionLoaded {
  type: ActionLoad.LOADED;
  payload: boolean;
}

export interface ActionCommon {
  type: ActionLoad.COMMON;
  payload: boolean;
}

export interface ActionIndustry {
  type: ActionLoadInfo.SET_DIRECT_INDUSTRY;
  payload: CatalogJobs[];
}

export interface ActionVacancies {
  type: ActionLoadInfo.SET_LIST_VACANCIES;
  payload: ArrayVacancies[];
}
