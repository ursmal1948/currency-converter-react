import React, { useState, useEffect } from 'react';
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
    step: "any",
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

  const [date, setDate] = useState(`${new Date()}`);

  const refreshDate = () => {
    setDate(new Date());
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshDate();
    }, 1000);
    return () => {
      clearInterval(intervalId)
    };
  }, [])



  //  useEffect(() => {
  //     setInterval(() =>  {}
  //       // setTime(new Date())
  //     }, 1000)
  //  }, [time])


  // setInterval(() => {
  //   setTime()
  // console.log(time)
  // }, 3000)

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime()
  //   }, 1000)
  // }, [time])




  return (
    <Container>
      <Header
        title="Kalkulator walutowy"
        date={date}
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
