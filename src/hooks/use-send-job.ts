import { useEffect, useRef } from 'react';
import { sendReqJob } from 'server/req-job';
import { ActionLoad } from 'types/enums/actions';
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
      dispatchServer({ type: ActionLoad.START, payload: 1 });
      sendReqJob(id)
        .then((result) => {
          setState(result);
          dispatchServer({ type: ActionLoad.END, payload: 1 });
        })
        .catch(() => {
          dispatchServer({ type: ActionLoad.ERROR, payload: true });
        });
    }
    myRef.current = false;
  }, [dispatchServer, setState, id]);
};
