import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const HomePage = () => {
  const today = new Date().toLocaleDateString();

  return (
    <HomeContainer>
      Сегодняшняя дата: {today}
    </HomeContainer>
  );
};

export default HomePage;
