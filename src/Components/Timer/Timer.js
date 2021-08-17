import React from 'react';
import { getStringByDate } from '../utils/getStringByDate';
import { TimerText } from './Timer.style';

const Timer = ({ locale }) => {
  const today = getStringByDate(new Date(), locale);

  return <TimerText>{today}</TimerText>;
};
export default Timer;
