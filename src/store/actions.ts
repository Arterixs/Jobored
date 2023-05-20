import { ActionLoad } from 'types/enums/actions';

export const ActionErrorLoad = (payload: boolean) => ({ type: ActionLoad.ERROR_LOAD, payload });
export const ActionLoaded = (payload: boolean) => ({ type: ActionLoad.LOADED, payload });
export const ActionCommon = (payload: boolean) => ({ type: ActionLoad.COMMON, payload });
