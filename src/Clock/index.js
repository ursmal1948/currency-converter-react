import { useCurrentDate } from "./useCurrentDate";
import { formatDate } from "./formatDate";

export const Clock = ({ className }) => {
const date = useCurrentDate();

  return (
    <>
      <p className={className}>
        Dzisiaj jest&nbsp;
        {formatDate(date)}
      </p>
    </>
  );
};
