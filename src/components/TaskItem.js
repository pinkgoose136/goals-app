import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  padding: 10px;
  background-color: #444;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompleteButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const TaskItem = ({ task }) => {
  const handleComplete = () => {
    alert(`Задание "${task.name}" выполнено!`);
    // Логика для обновления баланса и удаления задания
  };

  return (
    <TaskContainer>
      <span>{task.name} - {task.price} 💰</span>
      <CompleteButton onClick={handleComplete}>Выполнено</CompleteButton>
    </TaskContainer>
  );
};

export default TaskItem;
