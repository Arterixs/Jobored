import { useEffect, useState } from 'react';
import { Auth } from 'server/req-auth';

export const UseAuth = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('api запуск');
    const auth = Auth().then((result) => setValue(result));
  }, []);
  return value;
};
