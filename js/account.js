
// accountTab start -------------------------------
const accountContainer = document.getElementById('accountContainer');
if (accountContainer) {
  const tabButtons = document.querySelectorAll('.account__tabs-button');
  const tabContents = document.querySelectorAll('.account__info');
  const tabSelectedButton = document.querySelector('.account__tabs-selected');
  const tabSelectedButtonText = document.querySelector(
    '.account__tabs-selected-text'
  );
  const tabs = document.querySelector('.account__tabs');

  const clearAccountTabs = () => {
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });

    tabs.classList.remove('active');
  };

  tabButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      if (!button.classList.contains('active')) {
        clearAccountTabs();
        button.classList.add('active');
        tabContents[i].classList.add('active');
        tabSelectedButtonText.innerHTML = button.innerHTML;
      }
    });
  });

  tabSelectedButton.addEventListener('click', () => {
    tabs.classList.toggle('active');
  });

  window.onclick = function (event) {
    if (accountContainer) {
      if (!tabs.contains(event.target)) {
        tabs.classList.remove('active');
      }
    }
  };
}
// accountTab end -------------------------------