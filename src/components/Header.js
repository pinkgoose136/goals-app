import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #2b2b2b;
  color: white;
`;

const Balance = styled.div`
  font-size: 18px;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Header = ({ balance, onAddClick }) => {
  return (
    <HeaderContainer>
      <Balance>Баланс: {balance} 💰</Balance>
      <AddButton onClick={onAddClick}>Добавить</AddButton>
    </HeaderContainer>
  );
};

export default Header;
