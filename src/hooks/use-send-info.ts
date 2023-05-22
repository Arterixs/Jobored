import { useEffect, useRef } from 'react';
import { sendReqJobs } from 'server/req-jobs';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ActionLoadInfo } from 'types/enums/actions';
import { ActionReducerInfo, ActionsReducer } from 'types/types/actions';

export const useSendInformation = (
  dispatchServer: React.Dispatch<ActionsReducer>,
  dispatch: React.Dispatch<ActionReducerInfo>
) => {
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      dispatchServer(ActionLoaded(false));
      sendReqJobs()
        .then((result) => {
          dispatch({
            type: ActionLoadInfo.SET_DIRECT_INDUSTRY,
            payload: result,
          });
          dispatchServer(ActionLoaded(true));
        })
        .catch(() => {
          dispatchServer(ActionCommon(true));
        });
    }
    ref.current = false;
  }, [dispatchServer, dispatch]);
};
