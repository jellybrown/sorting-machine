import React from 'react';
import { Card, CardsWrapper, Title } from './Cards.style';

const Cards = ({ data, what }) => {
  const ascColor = ['#ffeb3b', '#6CAE7A', '#1565c0', '#e57373'];
  const descColor = ['#e57373', '#1565c0', '#6CAE7A', '#ffeb3b'];

  if (!data) {
    return <div></div>;
  }

  return (
    <CardsWrapper>
      <Title>{what === 'asc' ? '오름차순' : '내림차순'}</Title>
      {data.map((item, index) => (
        <Card
          key={index}
          color={what === 'asc' ? ascColor[index % 4] : descColor[index % 4]}
          index={index}
        >
          <span>{item}</span>
        </Card>
      ))}
    </CardsWrapper>
  );
};

export default React.memo(Cards);
