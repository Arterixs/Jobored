import { ActionCommon, ActionError, ActionLoaded } from 'types/interface/actions';

export type ActionsReducer = ActionError | ActionLoaded | ActionCommon;
