import React from 'react';
import { getStringByDate } from '../utils/getStringByDate';

const Timer = ({ locale = 'ko' }) => {
  const today = getStringByDate(new Date(), locale);

  return <div>{today}</div>;
};
export default Timer;
