import React from "react";
import { FinalResult } from "./styled";

const Result = ({ result }) =>
  !!result && (
    <React.Fragment>
      <FinalResult>
        {result.initialAmount.toFixed(2)}&nbsp;PLN&nbsp;=
        <strong>
          &nbsp;{result.resultAmount.toFixed(2)} {result.currency}
        </strong>
      </FinalResult>
    </React.Fragment>
  );

export default Result;
