import "./style.css"
import React from "react";

const Result = ({ result }) => (

    !!result && (
        <React.Fragment>
            <p className="result">
                {result.initialAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                <strong>
                    &nbsp;{result.resultAmount.toFixed(2)} {result.currency}
                </strong>
            </p>
        </React.Fragment>
    )
);

export default Result;