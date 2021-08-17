import React from 'react';
import { getStringByDate } from '../utils/getStringByDate';
import { TimerText } from './Timer.style';

const Timer = ({ locale, marginBottom = false }) => {
  const today = getStringByDate(new Date(), locale);

  return <TimerText {...{ marginBottom }}>{today}</TimerText>;
};
export default Timer;
