import React, { useState, useEffect } from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from './currencies';

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

  const [date, setDate] = useState(new Date());

  const updateDate = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateDate();
    }, 1000);
    return () => {
      clearInterval(intervalId)
    };
  }, [])

  return (
    <Container>
      <Header
        title="Kalkulator walutowy"
        date={date}
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
