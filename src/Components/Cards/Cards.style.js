import styled, { keyframes } from 'styled-components';

export const CardsWrapper = styled.div`
  flex: 1;
  border: 1px solid #737373;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  &:last-child {
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 0;
  top: -30px;
`;

const cardFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px)
  }
  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;

export const Card = styled.div`
  opacity: 0;
  background-color: ${(props) => props.color};
  display: inline-block;
  border-radius: 6px;
  animation-name: ${cardFadeUp};
  animation-duration: 1s;
  animation-delay: ${(props) => {
    return String((props.index + 1) * 0.2) + 's';
  }};
  animation-fill-mode: forwards;
  margin: 0 10px;

  > span {
    display: inline-block;
    word-wrap: break-word;
    padding: 20px 30px;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    font-family: 'Nunito', sans-serif;
    font-size: 60px;
    letter-spacing: -1.5px;
  }
`;
