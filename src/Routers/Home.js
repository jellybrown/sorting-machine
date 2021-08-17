import React from 'react';
import Cards from '../Components/Cards/Cards';
import Input from '../Components/Input/Input';
import Timer from '../Components/Timer/Timer';
import { Footer, Header, HomeWrapper } from './Home.style';

const Home = () => {
  return (
    <HomeWrapper>
      <Header>
        <Timer locale="ko" />
        <div>clock</div>
        <Input />
      </Header>
      <Cards />
      <Footer>
        <Timer locale="en" />
      </Footer>
    </HomeWrapper>
  );
};

export default Home;
