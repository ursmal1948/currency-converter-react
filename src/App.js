import React, { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from './currencies';


function App() {


  const inputAttributes = {
    className: "form__field",
    type: "number",
    name: "amount",
    placeholder: "Wpisz kwotę w zł",
    required: true,
    min: "1",
    step:"any",
  }

  const selectAttributes = {
    className: "form__field",
    name: "currency",
  }

  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {

    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    return (

      setResult({
        initialAmount: +amount,
        resultAmount: amount * rate,
        currency: currency,
      }))
  }

  return (
    <Container>
      <Header
        title="Kalkulator walutowy"
      />

      <Form
        selectAttributes={selectAttributes}
        inputAttributes={inputAttributes}
        calculateResult={calculateResult}
      />

      <Result
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App;
