import { useEffect, useState } from 'react';
import { GetJobs } from 'server/req-jobs';
import { Auth } from 'server/req-auth';
import { getVacansy } from 'server/req-vacansy';

export const UseAuth = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const auth = Auth()
      .then(() => Promise.allSettled([GetJobs(), getVacansy()]))
      .then(() => setValue(1))
      .catch(() => setValue(0));
  }, []);
  return value;
};
