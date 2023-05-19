import { useEffect, useState } from 'react';
import { GetJobs } from 'server/req-jobs';
import { Auth } from 'server/req-auth';

export const UseAuth = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const auth = Auth()
      .then(() => GetJobs())
      .then((result) => setValue(result))
      .catch(() => setValue(0));
  }, []);
  return value;
};
