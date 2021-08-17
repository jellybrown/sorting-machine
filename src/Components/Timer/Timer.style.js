import styled from 'styled-components';

export const TimerText = styled.span`
  display: inline-block;
  color: #dedede;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '20px' : 0)};
`;
