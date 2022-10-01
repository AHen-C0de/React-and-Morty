import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  const remove = () => localStorage.removeItem(key);

  return [state, setState, remove];
}

export { useLocalStorage };
