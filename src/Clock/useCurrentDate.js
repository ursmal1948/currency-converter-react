import { useState, useEffect } from "react";

export const useCurrentDate = () => {

  const [date, setDate] = useState(new Date());

  const updateDate = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateDate();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return date;
};
