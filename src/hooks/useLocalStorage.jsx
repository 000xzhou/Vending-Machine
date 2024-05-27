import { useState, useEffect } from "react";

const useLocalStorage = (key, initialVal) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialVal;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialVal;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
