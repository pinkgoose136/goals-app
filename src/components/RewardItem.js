import React from 'react';
import styled from 'styled-components';

const RewardContainer = styled.div`
  padding: 10px;
  background-color: #555;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  background-color: #d9534f;
  border: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const RewardItem = ({ reward }) => {
  const handleBuy = () => {
    alert(`Награда "${reward.name}" куплена!`);
    // Логика для обновления баланса и удаления награды
  };

  return (
    <RewardContainer>
      <span>{reward.name} - {reward.price} 💰</span>
      <BuyButton onClick={handleBuy}>Купить</BuyButton>
    </RewardContainer>
  );
};

export default RewardItem;
