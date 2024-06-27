import { useEffect, useState } from "react";

const useStorage = () => {
  const [storedValue, setStoredValue] = useState([]);

  useEffect(() => {
    if (storedValue.length) {
      localStorage.setItem("Key", JSON.stringify(storedValue));
    }
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useStorage;
