import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { currencies } from "./currencies";
import { StyledClock } from "./Clock/styled";
import { StyledHeader } from "./Header/styled";
import { StyledContainer } from "./Container/styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

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
      <StyledContainer>
        <StyledClock />
        <StyledHeader title="Kalkulator walutowy" />
        <Form calculateResult={calculateResult} />
        <Result result={result} calculateResult={calculateResult} />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
