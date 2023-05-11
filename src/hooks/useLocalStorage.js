import { useState, useEffect, useCallback } from 'react';

const useLocalStorage = key => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)));

  const updateValue = useCallback(
    newValue => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    },
    [key],
  );

  return [value, updateValue];
};
export default useLocalStorage;
