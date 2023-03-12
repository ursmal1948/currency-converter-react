import styled from "styled-components";

export const Label = styled.label`
  display: grid;
  grid-template-columns: 150px 210px;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  margin-left: 55px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: auto 170px;
    justify-content:space-evenly;
    margin-left: 15px;
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
  background-color: ${({ theme }) => theme.colors.persianGreen };
  border: none;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.aliceblue};
  font-weight: 500;
  transition: 1s;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.amethyst};
    scale: 1.1;
  }

  @media  (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-left: 30px;
    max-width: 90%;
  }
`;

export const Field = styled.input`
  padding: 3px 10px;
  margin-left: 10px;
`;

export const FieldSelect = styled.select`
  padding: 3px 10px;
  margin-left: 10px;
`;
