import styled from "styled-components";

export const StyledClock = styled.p`
  text-align: end;
  padding: 15px 15px 0 0;
  font-size: 13.5px;
  font-family: monospace;
  color: #777;

  @media
  (min-width: ${({ theme }) => theme.breakpoints.iphoneSE}px)
   and 
  (max-width: ${({ theme }) => theme.breakpoints.mobile}px)
  {
      padding-left:2px;
      padding-right: 3px;
  } 
`;
