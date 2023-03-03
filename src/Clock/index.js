import { useState, useEffect } from "react";

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

const Clock = ({ className }) => {
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

  return (
    <>
      <p className={className}>
        Dzisiaj jest&nbsp;
        {formatDate(date)}
      </p>
    </>
  );
};

export { Clock };
