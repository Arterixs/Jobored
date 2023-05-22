import { useEffect, useRef } from 'react';
import { sendReqJob } from 'server/req-job';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ArrayVacancies } from 'types/interface/server';
import { ActionsReducer } from 'types/types/actions';

export const useSendJob = (
  dispatchServer: React.Dispatch<ActionsReducer>,
  setState: (arr: ArrayVacancies) => void,
  id: string
) => {
  const myRef = useRef(true);
  useEffect(() => {
    if (myRef.current) {
      dispatchServer(ActionLoaded(false));
      sendReqJob(id)
        .then((result) => {
          setState(result);
          dispatchServer(ActionLoaded(true));
        })
        .catch(() => {
          dispatchServer(ActionCommon(true));
        });
    }
    myRef.current = false;
  }, [dispatchServer, setState, id]);
};
