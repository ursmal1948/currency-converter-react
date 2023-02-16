import "./style.css"
import { useState } from "react";
import { currencies } from "../currencies"

const Form = ({ selectAttributes, inputAttributes, calculateResult }) => {
    const [currency, setCurrency] = useState(currencies[0].shortName);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency)
        setAmount("");
    }


    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <label className="form__label">
                Waluta:
                <select {...selectAttributes}
                    value={currency}
                    onChange={
                        (event => setCurrency(event.target.value))
                    }
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.id}
                        >
                            {currency.shortName}
                        </option>
                    ))};
                </select>
            </label>
            <label className="form__label">
                Kwota:
                <input
                    value={amount}
                    {...inputAttributes}
                    onChange={
                        (event => setAmount(event.target.value))
                    }
                />
            </label>

            <p className="button__paragraph">
                <button className="form__button">Przelicz</button>
            </p>

        </form>
    );
};

export default Form;