import { createGlobalStyle } from "styled-components";
import backgroundMoney from "../img/backgroundMoney.jpg";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Lato', sans-serif;
  background-image:  url("${backgroundMoney}");
  background-repeat: repeat;
  background-position: initial;
  background-size: cover ;
}
 
html {
  box-sizing: border-box;
}

*, ::before, ::after {
  box-sizing: inherit;
}
`;
