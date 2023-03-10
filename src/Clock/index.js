import { useCurrentDate } from "./useCurrentDate";
import { formatDate } from "./formatDate";
import { StyledClock } from "./styled.js";

export const Clock = () => {
  const date = useCurrentDate();

  return (
    <>
      <StyledClock>
          Dzisiaj jest&nbsp;
          {formatDate(date)}
      </StyledClock>
    </>
  );
};
