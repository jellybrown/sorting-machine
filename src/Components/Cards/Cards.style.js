import styled, { keyframes } from 'styled-components';

/** card는 이거 사용 => 헷 못봤당
 * background color
 * green: 6CAE7B
 * yellow: EED862
 * blue: 7285AB
 * red: DE6969
 */

export const CardsWrapper = styled.div`
  flex: 1;
  margin-top: 100px;
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

  > span {
    display: inline-block;
    word-wrap: break-word;
    padding: 20px 30px;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    letter-spacing: -1.5px;
  }
`;
