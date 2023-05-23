import { useEffect } from 'react';
import { sendReqVacansy } from 'server/req-vacansy';
import { ActionLoad, ActionLoadInfo } from 'types/enums/actions';
import { StateDataRequest } from 'types/interface/states';
import { ActionReducerInfo } from 'types/types/actions';
import { convertQueryParams } from 'utils/helpers/main-page';
import { UseErrorContext } from './use-loaded-context';

export const useSendVacancies = (dispatch: React.Dispatch<ActionReducerInfo>, state: StateDataRequest) => {
  const dispatchServer = UseErrorContext().dispatch;
  useEffect(() => {
    const queryParams = convertQueryParams(state);
    dispatchServer({ type: ActionLoad.START, payload: 1 });
    sendReqVacansy(queryParams)
      .then((result) => {
        dispatch({
          type: ActionLoadInfo.SET_LIST_VACANCIES,
          payload: result,
        });
        dispatchServer({ type: ActionLoad.END, payload: 1 });
      })
      .catch(() => {
        dispatchServer({ type: ActionLoad.ERROR, payload: true });
      });
  }, [dispatchServer, dispatch, state]);
};
