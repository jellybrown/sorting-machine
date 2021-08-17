import styled from 'styled-components';

/** card는 이거 사용
 * background color
 * green: 6CAE7B
 * yellow: EED862
 * blue: 7285AB
 * red: DE6969
 */
export const CardsWrapper = styled.div`
  flex: 1;
`;

export const Card = styled.div`
  background-color: #6cae7b;
  display: inline-block;
  border-radius: 6px;

  > span {
    display: inline-block;
    padding: 20px 30px;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    font-family: 'Nunito', sans-serif;
    font-size: 60px;
    letter-spacing: -1.5px;
  }
`;
