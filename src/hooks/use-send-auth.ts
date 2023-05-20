import { useEffect } from 'react';
import { senReqAuth } from 'server/req-auth';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ActionsReducer } from 'types/types/actions';

export const useSendAuth = (dispatch: React.Dispatch<ActionsReducer>) => {
  useEffect(() => {
    senReqAuth()
      .then(() => {
        dispatch(ActionLoaded(true));
      })
      .catch(() => {
        dispatch(ActionCommon(true));
      });
  }, [dispatch]);
};
