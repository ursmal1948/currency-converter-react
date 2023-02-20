import React, { useState, useEffect } from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from './currencies';
import Clock from "./Clock";

function App() {

  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {

    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    return (
      setResult({
        initialAmount: +amount,
        resultAmount: amount * rate,
        currency: currency,
      }))
  };

  return (
    <Container>
      <Clock/>
      <Header
        title="Kalkulator walutowy"
      />
      <Form
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
