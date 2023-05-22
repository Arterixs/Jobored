import { useEffect, useRef } from 'react';
import { sendReqVacansy } from 'server/req-vacansy';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ArrayVacancies } from 'types/interface/server';
import { ActionsReducer } from 'types/types/actions';
import { getFavoriteParams } from 'utils/helpers/favorite';

export const useSendFavor = (
  dispatchServer: React.Dispatch<ActionsReducer>,
  setState: (arr: ArrayVacancies[]) => void,
  event: boolean
) => {
  const myRef = useRef(false);
  useEffect(() => {
    if (myRef.current) {
      const queryParams = getFavoriteParams();
      if (!queryParams) {
        setState([]);
        return;
      }
      dispatchServer(ActionLoaded(false));
      sendReqVacansy(queryParams)
        .then((result) => {
          setState(result);
          dispatchServer(ActionLoaded(true));
        })
        .catch(() => {
          dispatchServer(ActionCommon(true));
        });
    }
    myRef.current = true;
  }, [dispatchServer, setState, event]);
};
