import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import Container from "./Container/index";
import { currencies } from "./currencies";
import { StyledHeader } from "./Header/styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { Clock } from "./Clock/index";

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(
      ({ shortName }) => shortName === currency
    ).rate;

    return setResult({
      initialAmount: +amount,
      resultAmount: amount * rate,
      currency: currency,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Clock />
        <StyledHeader title="Kalkulator walutowy" />
        <Form calculateResult={calculateResult} />
        <Result result={result} calculateResult={calculateResult} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
