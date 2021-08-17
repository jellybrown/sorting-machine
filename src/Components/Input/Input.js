import React, { useEffect, useState } from 'react';
import { quickAsc, quickDes } from '../../utils/sort';
import { Button, ErrorMessage, InputWrapper, TextInput } from './Input.style';

const Input = () => {
  const [topArray, setTopArray] = useState([]);
  const [bottomArray, setBottomArray] = useState([]);
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  // return number[]
  const onSubmit = () => {
    if (value.split(',').length === 1)
      return setErrorMessage('값은 ,(콤마)를 써서 2개 이상 입력해주세요.');

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
    }, 3000);

    console.log(topArray);

    setValue(() => '');
  };

  useEffect(() => {
    console.log(bottomArray);
  }, [bottomArray]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit();
  };

  return (
    <InputWrapper>
      <TextInput
        placeholder="정렬할 숫자들을 ,(콤마)로 구분해서 입력해주세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <Button onClick={onSubmit}>확인</Button>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputWrapper>
  );
};

export default Input;

const regex = /^\d+$/;
