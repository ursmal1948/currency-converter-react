import styled from "styled-components";

export const Label = styled.label`
  display: grid;
  grid-template-columns: 150px 210px;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  margin-left: 55px;

  @media (max-width: 320px) {
    margin-left: 7px;
    grid-template-columns: 70px 160px;
  }

  @media (min-width: 321px) and (max-width: 767px) {
    grid-template-columns: 90px 170px;
    gap: 5px;
    margin-left: 40px;
  }
`;

export const Paragraph = styled.p`
  padding-bottom: 30px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 8px 0;
  margin: 25px 50px 0 50px;
  background-color: hsl(180, 100%, 30%);
  border: none;
  border-radius: 5px;
  color: aliceblue;
  font-weight: 500;
  transition: 1s;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  &:hover {
    background-color: rgb(188, 77, 203);
    scale: 1.1;
  }
`;
