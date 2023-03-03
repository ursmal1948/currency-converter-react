import { useState, useRef } from "react";
import { currencies } from "../currencies";
import { Label, Paragraph, Button, Field, FieldSelect } from "./styled";

const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    amount !== "" && calculateResult(amount, currency);
    setAmount("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Label>
        Waluta:
        <FieldSelect
          className="form__field"
          name="currency"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.id}>{currency.shortName}</option>
          ))}
          ;
        </FieldSelect>
      </Label>
      <Label>
        Kwota:
        <Field
          ref={inputRef}
          className="form__field"
          type="number"
          name="amount"
          placeholder="Wpisz kwotę w zł"
          min="1"
          step="any"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </Label>
      <Paragraph>
        <Button 
        onClick={focusInput}
        >
          Przelicz
        </Button>
      </Paragraph>
    </form>
  );
};

export default Form;
