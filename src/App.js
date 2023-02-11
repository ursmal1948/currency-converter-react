import React from 'react';
import Section from "./Section"
import Container from "./Container";
import Header from "./Header";
import Button from "./Button";
import Form from "./Form";
import Result from "./Result";




function App() {


  const inputAttributes = {
    className: "form__field",
    type: "number",
    name: "amount",
    placeholder: "Wpisz kwotę w zł",
    required: true,
    min: "1",
    step: "0.01",
  }

  const selectAttributes = {
    className: "form__field",
    name: "currency",
  }

  return (
    <Container>
      <Header
        title="Przelicznik walut"
      />
      
      <form className="form">
        <Section
          title="Waluta:"
          body={
            <select {...selectAttributes}>
              <option>NOK</option>
              <option>USD</option>
            </select>
          }
        />
        <Section
          title="Kwota:"
          body={
            <input {...inputAttributes} />
          }
        />
        <Button />
      </form>
      <Result />
    </Container>
  );
}

export default App;
