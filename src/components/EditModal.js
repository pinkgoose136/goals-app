import React, { useState, useEffect } from 'react';
import '../styles/EditModal.css';
import ItemForm from './ItemForm';

const EditModal = ({ item, onClose, onUpdate, onDelete, onBalanceChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [item]);

  const handleSave = (data) => {
    const updatedItem = { ...item, ...data };
    onUpdate(updatedItem);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setErrors({});
  };

  const handleAction = () => {
    console.log(Number(item.price), item.type)
    if (item.type === 'rewards') {
      onBalanceChange(-Number(item.price)); // уменьшаем баланс
    } else if (item.type === 'tasks') {
      onBalanceChange(Number(item.price)); // увеличиваем баланс
    }
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{item.name}</h2>
          <div className="modal-icons">
            {!isEditing && (
              <>
                <button className="icon-button" onClick={() => setIsEditing(true)} title="Редактировать">
                  ✏️
                </button>
                <button className="icon-button" onClick={() => onDelete(item.id)} title="Удалить">
                  🗑️
                </button>
              </>
            )}
          </div>
        </div>
        {isEditing ? (
          <ItemForm
            type={item.type}
            initialName={item.name}
            initialPrice={item.price}
            initialDays={item.days}
            onSave={handleSave}
            onCancel={handleCancel}
            errors={errors}
          />
        ) : (
          <>
            <p>Цена: {item.price} 💰</p>
            {item.type === 'task' && <p>Дни: {item.days.includes('everyday') ? 'Каждый день' : item.days.join(', ')}</p>}
            <button className="button" onClick={handleAction}>
              {item.type === 'reward' ? 'Купить' : 'Выполнить'}
            </button>
            <button className="button" onClick={onClose}>Закрыть</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditModal;
