import "./style.css"
import React from "react";

const Result = ({ result }) => {

    return (
        result.initialAmount && (
            <React.Fragment>
                <p className="result">
                    {result.initialAmount} PLN =
                    <strong>
                        {result.resultAmount} {result.currency}
                    </strong>

                </p>


            </React.Fragment>
        )
    )
};

export default Result;