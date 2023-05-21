import { sendReqVacansy } from 'server/req-vacansy';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ActionLoadInfo } from 'types/enums/actions';
import { ActionReducerInfo, ActionsReducer } from 'types/types/actions';

export const sendPage = (
  dispatchServer: React.Dispatch<ActionsReducer>,
  dispatch: React.Dispatch<ActionReducerInfo>,
  page: number
) => {
  dispatchServer(ActionLoaded(false));
  sendReqVacansy(page)
    .then((result) => {
      dispatch({ type: ActionLoadInfo.SET_LIST_VACANCIES, payload: result });
      dispatchServer(ActionLoaded(true));
    })
    .catch(() => {
      dispatchServer(ActionCommon(true));
    });
};
