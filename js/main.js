// var menu = document.getElementById('menu');
// var menuBtn = document.getElementById('menuBtn');
const body = document.body;

// const closeMenu = () => {
//   menu.classList.remove('active');
//   menuBtn.classList.remove('active');
//   body.classList.remove('active');
// };

// menuBtn.onclick = function () {
//   menu.classList.toggle('active');
//   menuBtn.classList.toggle('active');
//   body.classList.toggle('active');
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     closeMenu();
//   }
// };

const header = document.getElementById('header');
if (header)
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 10) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

const filter = document.getElementById('filter');
if (filter) {
  // filter dropdowns start
  const filterDropdowns = document.querySelectorAll('.filter__dropdown');

  filterDropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.filter__dropdown-button');
    const dropdownContent = dropdown.querySelector('.filter__dropdown-content');
    const offsetHeight = dropdownContent.scrollHeight;
    let toggle = true;
    dropdownButton.addEventListener('click', () => {
      if (toggle) {
        dropdown.classList.add('active');
        dropdownContent.style.height = offsetHeight + 'px';
        toggle = false;
      } else {
        dropdown.classList.remove('active');
        dropdownContent.style.height = 0;
        toggle = true;
      }
    });
  });
  // filter dropdowns end

  // filter popup start
  const filterOpenButton = document.getElementById('filterOpenButton');
  const filterCloseButton = document.getElementById('filterCloseButton');

  filterOpenButton.addEventListener('click', () => {
    filter.classList.add('active');
    body.classList.add('active');
  });

  filterCloseButton.addEventListener('click', () => {
    filter.classList.remove('active');
    body.classList.remove('active');
  });
  // filter popup end
}

// popup start -------------------------------
const popup = document.getElementById('popup');
if (popup) {
  const popupCloseButtons = document.querySelectorAll('.popup__close');
  const popupProducts = document.getElementById('popupProducts');
  const popupProductsButtons =
    popupProducts.querySelectorAll('.button--primary');

  const closePopUp = () => {
    popup.classList.remove('active');
    body.classList.remove('active');
  };

  const openPopUp = () => {
    popup.classList.add('active');
    body.classList.add('active');
  };

  popupCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      closePopUp();
    });
  });

  popupProductsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openPopUp();
    });
  });

  popup.addEventListener('click', (e) => {
    if (
      e.target.classList.value === 'popup active' ||
      e.target.classList.value === 'popup__inner'
    ) {
      closePopUp();
    }
  });
}
// popup end -------------------------------

// productGrid start -------------------------------
const gridButton = document.getElementById('gridButton');
let isGrid = true;
if (gridButton) {
  gridButton.addEventListener('click', () => {
    const cartsItemsWrapper = document.querySelector('.cartsItemsWrapper');
    const cartsItems = cartsItemsWrapper.querySelectorAll('.cart');

    if (isGrid) {
      cartsItems.forEach((item) => {
        item.classList.add('cart--list');
      });

      gridButton.innerHTML = `
      <span class="icon icon--stroke">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M10 3H3V10H10V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" />
         <path d="M21 3H14V10H21V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" />
         <path d="M21 14H14V21H21V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" />
         <path d="M10 14H3V21H10V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" />
         </svg>
      </span>
      <span>
         Tegels
      </span>
    `;

      isGrid = false;
    } else {
      cartsItems.forEach((item) => {
        item.classList.remove('cart--list');
      });

      gridButton.innerHTML = `
       <span class="icon icon--stroke">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66699 5H17.5003" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M6.66699 10H17.5003" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M6.66699 15H17.5003" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M2.5 5H2.51" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                troke-linejoin="round" />
            <path d="M2.5 10H2.51" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M2.5 15H2.51" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </span>
      <span>
        Lijst
      </span>
    `;

      isGrid = true;
    }
  });
}

// productGrid end -------------------------------

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

// infoTab start -------------------------------
const info = document.getElementById('info');
if (info) {
  const infoItems = document.querySelectorAll('.info__item');
  infoItems.forEach((item) => {
    const infoButton = item.querySelector('.info__item-button');

    infoButton.addEventListener('click' , ()=>{
      item.classList.toggle('active')
    })
  });
}
// infoTab end -------------------------------
