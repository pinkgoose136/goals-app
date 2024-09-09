import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import EditModal from '../components/EditModal';
import { getStoredData, deleteItem, updateItem } from '../utils/storage';

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemsPage = ({ itemType, onBalanceChange }) => { // Добавлено onBalanceChange как пропс
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedItems = getStoredData(itemType);
    setItems(storedItems);
  }, [itemType]);

  const handleItemClick = (item) => {
    setSelectedItem({ ...item, type: itemType });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleItemUpdate = (updatedItem) => {
    updateItem(itemType, updatedItem);
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    handleModalClose();
  };

  const handleItemDelete = (itemId) => {
    deleteItem(itemType, itemId);
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
    handleModalClose();
  };

  return (
    <PageContainer>
      <h2>{itemType === 'tasks' ? 'Задания' : 'Награды'}</h2>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={() => handleItemClick(item)} />
      ))}
      {isModalOpen && selectedItem && (
        <EditModal
          item={selectedItem}
          onClose={handleModalClose}
          onUpdate={handleItemUpdate}
          onDelete={handleItemDelete}
          onBalanceChange={onBalanceChange} // Передаем onBalanceChange в EditModal
        />
      )}
    </PageContainer>
  );
};

export default ItemsPage;
