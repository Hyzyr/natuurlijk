const menuFog = document.querySelector('.headerTabs-fog');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const tabsWrapper = document.querySelector('.headerTabs');
const tabBtns = document.querySelectorAll('.nav-link');
const toggleWithMenu = document.querySelectorAll('.toggleWithMenu');
const backToMenu = document.querySelectorAll('.backToMenu');

const header = document.getElementById('header');
const body = document.body;

const addScrollBarSpacing = (add = true) => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  if (add) {
    body.style.paddingRight = `${scrollbarWidth}px`;
    header.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    body.style.paddingRight = null;
    header.style.paddingRight = null;
  }
};

const closeTabs = () => {
  const menuTabs = document.querySelectorAll('.headerTabs__tab.active');
  menuTabs.forEach((tab) => tab.classList.remove('active'));
};
const closeAll = (all = true) => {
  addScrollBarSpacing(false);
  tabsWrapper.classList.remove('active');
  body.classList.remove('active');

  tabBtns.forEach((btn) => btn.classList.remove('active'));
  if (all) toggleWithMenu.forEach((itm) => itm.classList.remove('active'));
  setTimeout(closeTabs, 150);
};
if (menuFog)
  menuFog.onclick = () => {
    closeAll();
  };
if (tabBtns)
  tabBtns.forEach(
    (btn) =>
      (btn.onclick = () => {
        let isClosed = !btn.classList.contains('active');
        closeAll(false);

        const tabId = btn.dataset.tab;
        const tab = document.getElementById(tabId);
        if (isClosed && tab) {
          setTimeout(() => {
            addScrollBarSpacing();
            body.classList.add('active');
            tabsWrapper.classList.add('active');
            tab.classList.add('active');
            btn.classList.add('active');
          }, 200);
        }
      })
  );
if (menuBtn)
  menuBtn.onclick = function () {
    let isClosed = !menuBtn.classList.contains('active');
    if (isClosed) {
      setTimeout(() => {
        addScrollBarSpacing();
        body.classList.add('active');
        menu.classList.add('active');
        menuBtn.classList.add('active');
        toggleWithMenu.forEach((itm) => itm.classList.add('active'));
      }, 200);
    } else {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      closeAll();
    }
  };
if (backToMenu)
  backToMenu.forEach((btn) => {
    btn.onclick = () => {
      closeAll();
    };
  });
// window.onclick = function (event) {
//   if (event.target == menu) {
//     closeMenu();
//   }
// };

if (header)
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 10) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

const headerSearch = document.getElementById('headerSearch');

if (headerSearch) {

  const headerSearchOuter = document.getElementById('headerSearchOuter');
  const headerSearchPopup = document.getElementById('headerSearchPopup');
  const headerSearchContent = headerSearchPopup.querySelector(
    '.headerSearch__inner'
  );
  const headerSearchCloseButtons = document.querySelectorAll(
    '.headerSearch__close'
  );

  const closeSearch = () => {
    headerSearchPopup.classList.remove('active');
    headerSearchOuter.classList.remove('active');
    body.classList.remove('active');

    headerSearch.value = '';
  };

  headerSearch.addEventListener('keyup', (e) => {
    if (e.target.value != '' && e.target.value != ' ') {
      if (window.pageYOffset < 20) window.scrollTo(0, 20);

      setTimeout(() => {
        const headerSearchPosition = headerSearch.getBoundingClientRect();
        headerSearchContent.style.marginTop =
          headerSearchPosition.top + headerSearchPosition.height + 8 + 'px';

        headerSearchPopup.classList.add('active');
        headerSearchOuter.classList.add('active');
        body.classList.add('active');
      }, 200);
    } else {
      setTimeout(() => {
        closeSearch();
      }, 200);
    }
  });

  headerSearchCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      closeSearch();
    });
  });

  headerSearchPopup.addEventListener('click', (e) => {
    if (
      e.target.classList.value == 'headerSearch active' ||
      e.target.classList.value == 'autoContainer' ||
      e.target.classList.value == 'headerSearch__inner'
    ) {
      closeSearch();
    }
  });
}

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

    infoButton.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}
// infoTab end -------------------------------
