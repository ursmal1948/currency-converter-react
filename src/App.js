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
  }

  const selectAttributes = {
    className: "form__field",
    name: "currency",
  }

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {


    setResult({
      initialAmount:amount,
      resultAmount:amount * //rate,
      currency,


    }
    )



  }

  return (
    <Container>
      <Header
        title="Przelicznik walut"
      />

      <Form
        selectAttributes={selectAttributes}
        inputAttributes={inputAttributes}
      />

      <Result />
    </Container>
  );
}

export default App;
