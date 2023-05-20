import { ActionLoad } from 'types/enums/actions';

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
