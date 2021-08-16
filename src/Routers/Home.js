import React from 'react';
import Input from '../Components/Input/Input';
import Timer from '../Components/Timer/Timer';

const Home = () => {
  return (
    <div>
      <Timer locale="ko" />
      <clock></clock>
      <Input />
      <Timer locale="en" />
    </div>
  );
};

export default Home;
