import { FinalResult } from "./styled";

const Result = ({ result }) =>
  !!result && (
      <FinalResult>
        {result.initialAmount.toFixed(2)}&nbsp;PLN&nbsp;=
        <strong>
          &nbsp;{result.resultAmount.toFixed(2)} {result.currency}
        </strong>
      </FinalResult>
  );

export default Result;
