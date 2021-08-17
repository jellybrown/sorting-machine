import styled from 'styled-components';

export const HomeWrapper = styled.section`
  background-color: #353535;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const TimeSection = styled.div`
  height: 200px;
  position: relative;
`;

export const CurrentTime = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.footer`
  height: 30px;
  display: flex;
  justify-content: center;
`;
