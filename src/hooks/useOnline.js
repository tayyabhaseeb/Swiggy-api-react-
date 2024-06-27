import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => setIsOnline(true);
  const handleOffline = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      handleOnline();
    });
    window.addEventListener("offline", (event) => {
      handleOffline();
    });

    return () => {
      window.removeEventListener("online", (event) => {
        handleOnline();
      });
      window.removeEventListener("offline", (event) => {
        handleOffline();
      });
    };
  });

  return isOnline;
};

export default useOnline;
