import "./style.css"
import React from "react";

const Result = ({ result }) => (
    result.initialAmount && (
        <React.Fragment>
            <p className="result">
                {result.initialAmount} PLN =
                <strong>
                    &nbsp;{result.resultAmount.toFixed(1)} {result.currency}
                </strong>
            </p>
        </React.Fragment>
    )
);

export default Result;