import styled from "styled-components";

export const FinalResult = styled.p`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.majorColor};
`;

