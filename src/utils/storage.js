// Функция для генерации уникального ID
const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

// Получаем данные из локального хранилища
export const getStoredData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Сохраняем данные в локальное хранилище
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Сохраняем задание
export const saveTask = (task) => {
  const tasks = getStoredData('tasks');
  const taskWithId = { ...task, id: generateUniqueId() }; // Присваиваем уникальный ID
  tasks.push(taskWithId);
  saveData('tasks', tasks);
};

// Сохраняем награду
export const saveReward = (reward) => {
  const rewards = getStoredData('rewards');
  const rewardWithId = { ...reward, id: generateUniqueId() }; // Присваиваем уникальный ID
  rewards.push(rewardWithId);
  saveData('rewards', rewards);
};

// Удаление элемента по ID
export const deleteItem = (key, id) => {
  const items = getStoredData(key);
  const updatedItems = items.filter(item => item.id !== id);
  saveData(key, updatedItems);
};

// Обновление элемента по ID
export const updateItem = (key, updatedItem) => {
  const items = getStoredData(key);
  const updatedItems = items.map(item => (item.id === updatedItem.id ? updatedItem : item));
  saveData(key, updatedItems);
};



export const setStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const updateBalance = (change) => {
  let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
  currentBalance += change;
  localStorage.setItem('balance', currentBalance);
};

export const getBalance = () => {
  return parseFloat(localStorage.getItem('balance')) || 0;
};

export const saveBalance = (balance) => {
  localStorage.setItem('balance', balance);
};