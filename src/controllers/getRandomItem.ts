export const getRandomItem = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  if (array[randomIndex].name == undefined) return array[randomIndex];
  return array[randomIndex].name;
};
