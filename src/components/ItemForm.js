import React, { useState, useEffect } from 'react';
import '../styles/ItemForm.css';

const ItemForm = ({ type, initialName = '', initialPrice = 0, initialDays = [], onSave, onCancel, errors = {} }) => {
  const [name, setName] = useState(initialName);
  const [price, setPrice] = useState(initialPrice);
  const [daysOfWeek, setDaysOfWeek] = useState(initialDays);
  const [taskFrequency, setTaskFrequency] = useState(initialDays.length > 0 ? 'days' : 'none');

  useEffect(() => {
    setName(initialName || '');
    setPrice(initialPrice || 0);
    setDaysOfWeek(initialDays || []);
    setTaskFrequency(initialDays.length > 0 ? 'days' : 'none');
  }, [initialName, initialPrice, initialDays]);

  const handleSave = () => {
    const errors = {};
    if (name.trim() === '') errors.name = 'Введите название!';
    if (price < 1) errors.price = 'Цена должна быть больше 0!';
    if (type === 'task' && taskFrequency === 'days' && daysOfWeek.length === 0) {
      errors.days = 'Выберите хотя бы один день недели!';
    }

    if (Object.keys(errors).length > 0) {
      onSave(null, errors);
      return;
    }

    const data = { name, price, taskFrequency, daysOfWeek };
    onSave(data);
  };

  const handleFrequencyChange = (frequency) => {
    setTaskFrequency(frequency);
    if (frequency !== 'days') {
      setDaysOfWeek([]);
    }
  };

  const toggleDay = (day) => {
    setDaysOfWeek(prevDays =>
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`input-field ${errors.name ? 'error' : ''}`}
      />
      {errors.name && <p className="error-message">{errors.name}</p>}
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={`input-field ${errors.price ? 'error' : ''}`}
      />
      {errors.price && <p className="error-message">{errors.price}</p>}
      {type === 'task' && (
        <div className="frequency-options">
          <label>
            <input
              type="radio"
              value="everyday"
              checked={taskFrequency === 'everyday'}
              onChange={() => handleFrequencyChange('everyday')}
            />
            Каждый день
          </label>
          <label>
            <input
              type="radio"
              value="none"
              checked={taskFrequency === 'none'}
              onChange={() => handleFrequencyChange('none')}
            />
            Без даты
          </label>
          <label>
            <input
              type="radio"
              value="days"
              checked={taskFrequency === 'days'}
              onChange={() => handleFrequencyChange('days')}
            />
            В выбранные дни
          </label>
          {taskFrequency === 'days' && (
            <div className="days-selection">
              {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    checked={daysOfWeek.includes(day)}
                    onChange={() => toggleDay(day)}
                  />
                  {day}
                </label>
              ))}
            </div>
          )}
          {errors.days && <p className="error-message">{errors.days}</p>}
        </div>
      )}
      <button onClick={handleSave} className="button save-button">Сохранить</button>
      <button onClick={onCancel} className="button cancel-button">Отменить</button>
    </div>
  );
};

export default ItemForm;
