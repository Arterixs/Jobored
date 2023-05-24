import { useEffect, useRef } from 'react';
import { sendReqJobs } from 'server/req-jobs';
import { ActionLoad, ActionLoadInfo } from 'types/enums/actions';
import { ActionReducerInfo } from 'types/types/actions';
import { useErrorContext } from './use-loaded-context';

export const useSendInformation = (dispatch: React.Dispatch<ActionReducerInfo>) => {
  const dispatchServer = useErrorContext().dispatch;
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      dispatchServer({ type: ActionLoad.START, payload: 1 });
      sendReqJobs()
        .then((result) => {
          dispatch({
            type: ActionLoadInfo.SET_DIRECT_INDUSTRY,
            payload: result,
          });
          dispatchServer({ type: ActionLoad.END, payload: 1 });
        })
        .catch(() => {
          dispatchServer({ type: ActionLoad.ERROR, payload: true });
        });
    }
    ref.current = false;
  }, [dispatchServer, dispatch]);
};
