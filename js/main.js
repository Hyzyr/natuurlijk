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







