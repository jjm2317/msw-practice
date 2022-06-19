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

export default {
  getStorageItem,
  setStorageItem,
};
