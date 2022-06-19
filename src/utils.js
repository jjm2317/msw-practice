export const getStorageItem = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    return JSON.parse(item);
  } catch (err) {
    return null;
  }
};

export const setStorageItem = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const formatYYYYMMDD = (dateInstance) => {
  const year = dateInstance.getFullYear();
  const month = dateInstance.getMonth() + 1;
  const date = dateInstance.getDate();

  return `${year}-${month >= 10 ? month : `0${month}`}-${
    date >= 10 ? date : `0${date}`
  }`;
};

export default {
  getStorageItem,
  setStorageItem,
};
