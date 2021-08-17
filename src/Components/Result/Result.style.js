import styled from 'styled-components';

export const ResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 600px;
  margin: 130px auto;
`;

export const TextInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  font-size: 14px;
  color: #686868;
  padding: 15px 15px;
  border-radius: 6px;
  margin-right: 15px;

  &::placeholder {
    color: #a4a4a4;
  }
  &::-webkit-input-placeholder {
    color: #a4a4a4;
  }
  &:-ms-input-placeholder {
    color: #a4a4a4;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 15px 35px;
  background-color: #717171;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #656565;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  color: #dcdcdc;
  position: absolute;
  left: 4px;
  bottom: -25px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
