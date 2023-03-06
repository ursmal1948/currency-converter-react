import { useCurrentDate } from "./useCurrentDate";

export const Clock = ({ className }) => {
const [date, formatDate] = useCurrentDate();

  return (
    <>
      <p className={className}>
        Dzisiaj jest&nbsp;
        {formatDate(date)}
      </p>
    </>
  );
};
