const getRandomBirdNumber = () => {
  const maxNumber = 6;
  return Math.floor(Math.random() * maxNumber);
};

export { getRandomBirdNumber };
