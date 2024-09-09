import React, { useState } from 'react';
import '../styles/Modal.css';
import ItemForm from './ItemForm';
import { saveTask, saveReward } from '../utils/storage';

const Modal = ({ onClose }) => {
  const [type, setType] = useState('task');
  const [errors, setErrors] = useState({});

  const handleSave = (data) => {
    const { name, price, taskFrequency, daysOfWeek } = data;
    const errors = {};

    if (name.trim() === '') errors.name = 'Введите название!';
    if (price < 1) errors.price = 'Цена должна быть больше 0!';
    if (type === 'task' && taskFrequency === 'days' && daysOfWeek.length === 0) {
      errors.days = 'Выберите хотя бы один день недели!';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (type === 'task') {
      saveTask({ name, price, frequency: taskFrequency, days: daysOfWeek });
    } else {
      saveReward({ name, price });
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Добавить</h2>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="task">Задание</option>
          <option value="reward">Награда</option>
        </select>
        <ItemForm
          type={type}
          initialName=""  // Передаем начальные значения
          initialPrice={0}  // Передаем начальные значения
          initialDays={[]}  // Передаем начальные значения
          onSave={handleSave}
          onCancel={onClose}
          errors={errors}
        />
        <button onClick={onClose} className="button cancel-button">Отмена</button>
      </div>
    </div>
  );
};

export default Modal;
