import { useEffect } from 'react';
import { sendReqVacansy } from 'server/req-vacansy';
import { ActionLoad } from 'types/enums/actions';
import { ArrayVacancies } from 'types/interface/server';
import { ActionsReducer } from 'types/types/actions';
import { getFavoriteParams } from 'utils/helpers/favorite';

export const useSendFavor = (
  dispatchServer: React.Dispatch<ActionsReducer>,
  setState: (arr: ArrayVacancies[]) => void,
  event: boolean
) => {
  useEffect(() => {
    const queryParams = getFavoriteParams();
    if (!queryParams) {
      setState([]);
      return;
    }
    dispatchServer({ type: ActionLoad.START, payload: 1 });
    sendReqVacansy(queryParams)
      .then((result) => {
        setState(result);
        dispatchServer({ type: ActionLoad.END, payload: 1 });
      })
      .catch(() => {
        dispatchServer({ type: ActionLoad.ERROR, payload: true });
      });
  }, [dispatchServer, setState, event]);
};
