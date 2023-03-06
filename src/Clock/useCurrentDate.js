import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const formatDate = (date) =>
    date.toLocaleString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "numeric",
    });

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

  return [date, formatDate];
};
