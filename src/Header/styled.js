import styled from "styled-components";
import Header from ".";

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  color:${({ theme }) => theme.colors.persianGreen};
  padding: 10px;
`;



