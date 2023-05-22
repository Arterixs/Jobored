export const setIdFavorite = (id: number) => {
  const data = localStorage.getItem('favorite');
  if (data) {
    const array = JSON.parse(data) as number[];
    array.push(id);
    localStorage.setItem('favorite', JSON.stringify(array));
    return;
  }
  localStorage.setItem('favorite', JSON.stringify([id]));
};

export const deleteIdFavorite = (id: number) => {
  const data = localStorage.getItem('favorite');
  if (data) {
    const array = JSON.parse(data) as number[];
    const updateArray = array.filter((item) => item !== id);
    localStorage.setItem('favorite', JSON.stringify(updateArray));
  }
};
