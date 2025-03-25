// checkout--send start -------------------------------
const checkoutSend = document.querySelector('.checkout__send');
if (checkoutSend) {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const checkoutItems = document.querySelectorAll('.checkout__send-item');
  const checkoutItemContainer = document.querySelectorAll(
    '.checkout__send-container'
  );

  const clearCheckoutItems = () => {
    checkoutItems.forEach((item) => {
      item.classList.remove('active');
    });

    checkoutItemContainer.forEach((item) => {
      item.style.height = 0;
    });
  };

  const checkoutInit = () => {
    radioButtons.forEach((input, i) => {
      const checkoutItemContainer = checkoutItems[i].querySelector(
        '.checkout__send-container'
      );

      if (input.checked) {
        checkoutItems[i].classList.add('active');
        checkoutItemContainer.style.height =
          checkoutItemContainer.scrollHeight + 'px';
      }
    });
  };

  checkoutInit();

  radioButtons.forEach((input, i) => {
    input.addEventListener('input', () => {
      if (input.checked) {
        const checkoutItemContainer = checkoutItems[i].querySelector(
          '.checkout__send-container'
        );

        clearCheckoutItems();

        checkoutItems[i].classList.add('active');
        checkoutItemContainer.style.height =
          checkoutItemContainer.scrollHeight + 'px';
      }
    });
  });
}
// checkout--send end -------------------------------