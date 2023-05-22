import { useEffect, useRef } from 'react';
import { sendReqVacansy } from 'server/req-vacansy';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ActionLoadInfo } from 'types/enums/actions';
import { StateDataRequest } from 'types/interface/states';
import { ActionReducerInfo, ActionsReducer } from 'types/types/actions';
import { convertQueryParams } from 'utils/helpers/main-page';

export const useSendVacancies = (
  dispatchServer: React.Dispatch<ActionsReducer>,
  dispatch: React.Dispatch<ActionReducerInfo>,
  state: StateDataRequest
) => {
  const myRef = useRef(false);
  useEffect(() => {
    if (myRef.current) {
      const queryParams = convertQueryParams(state);
      dispatchServer(ActionLoaded(false));
      sendReqVacansy(queryParams)
        .then((result) => {
          dispatch({
            type: ActionLoadInfo.SET_LIST_VACANCIES,
            payload: result,
          });
          dispatchServer(ActionLoaded(true));
        })
        .catch(() => {
          dispatchServer(ActionCommon(true));
        });
    }
    myRef.current = true;
  }, [dispatchServer, dispatch, state]);
};
