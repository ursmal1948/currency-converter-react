import styled from "styled-components";
import Container from ".";

export const StyledContainer = styled(Container)`
  margin: 100px auto;
  width: 100%;
  max-width: 500px;
  border: none;
  background-color: #fffef3;
  border-radius: 13px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 321px) and (max-width: 767px) {
    max-width: 350px;
  }

  @media (max-width: 320px) {
    max-width: 80%;
    margin-right: 40px;
  }
`;
