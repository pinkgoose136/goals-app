import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';

import Modal from './components/Modal';
import { getStoredData, saveBalance } from './utils/storage';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #1a1a1d;
    color: #f1f1f1;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px; /* Учитываем место для Footer */
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [balance, setBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedBalance = getStoredData('balance') || 0;
    setBalance(storedBalance);
  }, []);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onBalanceChange = (amount) => {
    const newBalance = balance + amount; // сумма баланса и изменения
    setBalance(newBalance);
    saveBalance(newBalance); // сохранить в хранилище
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header balance={balance} onAddClick={handleAddClick} />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'goals' && <ItemsPage itemType="tasks" onBalanceChange={onBalanceChange} />} {/* Передаем onBalanceChange */}
      {currentPage === 'rewards' && <ItemsPage itemType="rewards" onBalanceChange={onBalanceChange} />} {/* Передаем onBalanceChange */}
      <Footer onPageChange={handlePageChange} />
      {isModalOpen && <Modal onClose={handleModalClose} setBalance={setBalance} />}
    </AppContainer>
  );
};

export default App;