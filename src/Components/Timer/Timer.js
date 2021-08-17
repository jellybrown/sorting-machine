import React from 'react';
import { TimerText } from './Timer.style';
import { getStringByDate } from '../utils/getStringByDate';

const Timer = ({ locale, marginBottom = false }) => {
  const today = getStringByDate(new Date(), locale);

  return <TimerText {...{ marginBottom }}>{today}</TimerText>;
};
export default React.memo(Timer);
