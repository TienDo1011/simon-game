const domClick = (color) => {
  const element = document.getElementById(color);
  element.classList.add('btn-lg');
  console.log('element', element);
  setTimeout(() => {
    element.classList.remove('btn-lg');
  }, 500);
};

export default domClick;
