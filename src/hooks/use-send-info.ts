import { useEffect, useRef, useState } from 'react';
import { sendReqJobs } from 'server/req-jobs';
import { sendReqVacansy } from 'server/req-vacansy';
import { ActionCommon, ActionLoaded } from 'store/actions';
import { ArrayVacancies, CatalogJobs } from 'types/interface/server';
import { ActionsReducer } from 'types/types/actions';

export const useSendInformation = (dispatch: React.Dispatch<ActionsReducer>) => {
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      dispatch(ActionLoaded(false));
      Promise.allSettled([sendReqVacansy(), sendReqJobs()])
        .then(() => dispatch(ActionLoaded(true)))
        .catch(() => {
          dispatch(ActionCommon(true));
        });
    }
    ref.current = false;
  }, [dispatch]);
};
