// infoTab start -------------------------------
const info = document.getElementById('info');
if (info) {
  const infoItems = document.querySelectorAll('.info__item');
  infoItems.forEach((item) => {
    const infoButton = item.querySelector('.info__item-button');

    infoButton.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}
// infoTab end -------------------------------