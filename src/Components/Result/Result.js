import React, { useState } from 'react';
import {
  Button,
  ErrorMessage,
  CardsContainer,
  ResultWrapper,
  TextInput,
} from './Result.style';
import { quickAsc, quickDes } from '../../utils/sort';
import Cards from '../Cards/Cards';

const Result = () => {
  const [topArray, setTopArray] = useState([]);
  const [bottomArray, setBottomArray] = useState([]);
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = () => {
    if (value.split(',').length === 1)
      return setErrorMessage('값은 ,(콤마)를 써서 2개 이상 입력해주세요.');

    setTopArray(() => []);
    setBottomArray(() => []);

    const numbers = value.split(',').map((char) => char.trim());

    const isValid = numbers.every(
      (char) => char.length > 0 && regex.test(char)
    );

    if (!isValid)
      return setErrorMessage(
        '입력 값에 숫자가 아닌 값(한글, 영어, 특수문자, 공백)이 있습니다.'
      );

    setErrorMessage(null);

    const newNumbers = numbers.map((item) => parseInt(item, 10));

    setTopArray(() => quickAsc([...newNumbers]));
    setTimeout(() => {
      setBottomArray(() => {
        return quickDes([...newNumbers]);
      });
    }, 2000);

    setValue(() => '');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit();
  };

  return (
    <>
      <ResultWrapper>
        <TextInput
          placeholder="정렬할 숫자들을 ,(콤마)로 구분해서 입력해주세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => onKeyDown(e)}
        />
        <Button onClick={onSubmit}>확인</Button>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ResultWrapper>
      <CardsContainer>
        <Cards data={topArray} what={'asc'}></Cards>
        <Cards data={bottomArray} what={'desc'}></Cards>
      </CardsContainer>
    </>
  );
};

export default React.memo(Result);

const regex = /^\d+$/;
