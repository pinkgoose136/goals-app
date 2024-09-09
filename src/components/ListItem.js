// src/components/ListItem.js
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const ItemTitle = styled.span`
  font-size: 16px;
`;

const ItemPrice = styled.span`
  font-size: 14px;
  color: #aaa;
`;

const ListItem = ({ item, onClick }) => {
  const { name, price } = item;
  return (
    <ItemContainer onClick={onClick}>
      <ItemTitle>{name}</ItemTitle>
      <ItemPrice>{price ? `${price} 💰` : '—'}</ItemPrice>
    </ItemContainer>
  );
};

export default ListItem;
