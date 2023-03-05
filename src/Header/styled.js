import styled from "styled-components";
import Header from ".";

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  color:${({ theme }) => theme.colors.primaryColor};
  padding: 10px;
`;



