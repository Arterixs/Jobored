import { useEffect, useRef } from 'react';
import { senReqAuth } from 'server/req-auth';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ActionsReducer } from 'types/types/actions';

export const useSendAuth = (dispatch: React.Dispatch<ActionsReducer>) => {
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      dispatch(ActionLoaded(false));
      senReqAuth()
        .then(() => {
          dispatch(ActionLoaded(true));
        })
        .catch(() => {
          dispatch(ActionCommon(true));
        });
    }
    ref.current = false;
  }, [dispatch]);
};
