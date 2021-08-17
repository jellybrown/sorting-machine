import React, { useEffect, useState } from 'react';
import { CurrentTime, Footer, HomeWrapper, TimeSection } from './Home.style';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import Timer from '../Components/Timer/Timer';
import Result from '../Components/Result/Result';

const Home = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HomeWrapper>
      <TimeSection>
        <CurrentTime>
          <Timer locale="ko" marginBottom={true} />
          <Clock
            value={clock}
            size={140}
            secondHandWidth={2}
            secondHandLength={75}
          />
        </CurrentTime>
        <Result />
      </TimeSection>
      <Footer>
        <Timer locale="en" />
      </Footer>
    </HomeWrapper>
  );
};

export default Home;
