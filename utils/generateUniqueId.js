const generateUniqueId = () => {
  return Math.floor(1 + Math.random() * 20000);
};

export default generateUniqueId;
