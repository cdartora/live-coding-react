export const getMemes = () => {
  return JSON.parse(localStorage.getItem('savedMemes'));
};

export const addMeme = (meme) => {
  const savedMemes = getMemes() || [];
  const newSavedMemes = [...savedMemes, meme];
  localStorage.setItem('savedMemes', JSON.stringify(newSavedMemes))
}