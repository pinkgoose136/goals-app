import React, { useState } from 'react';
import '../styles/styles1.css'; // Import the consolidated styles

const Footer = ({ onPageChange }) => {
  const [selectedPage, setSelectedPage] = useState('home'); // State to track the selected page

  const handlePageChange = (page) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  return (
    <footer className="footer-container">
      <button
        className={`footer-button ${selectedPage === 'home' ? 'selected' : ''}`}
        onClick={() => handlePageChange('home')}
      >
        Главная
      </button>
      <button
        className={`footer-button ${selectedPage === 'goals' ? 'selected' : ''}`}
        onClick={() => handlePageChange('goals')}
      >
        Цели
      </button>
      <button
        className={`footer-button ${selectedPage === 'rewards' ? 'selected' : ''}`}
        onClick={() => handlePageChange('rewards')}
      >
        Награды
      </button>
    </footer>
  );
};

export default Footer;
