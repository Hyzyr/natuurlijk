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

// const header = document.getElementById('header');
// if (header)
//   window.addEventListener('scroll', () => {
//     if (document.documentElement.scrollTop > 400) {
//       header.classList.add('sticky');
//     } else {
//       header.classList.remove('sticky');
//     }
//   });

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

// const tabWrapper = document.querySelectorAll('.tabWrapper');
// tabWrapper.forEach((tab) => {
//   const tabEvents = tab.querySelectorAll('.tabBtn');
//   const tabContainer = tab.querySelectorAll('.tabContainer');
//   const clearActives = (clearParent = false) => {
//     tabEvents.forEach(function (item) {
//       item.classList.remove('active');

//       let parent = item.parentElement.parentElement;
//       if (clearParent) parent.classList.remove('active');
//     });
//     tabContainer.forEach(function (item) {
//       item.classList.remove('active');
//     });
//   };
//   tabEvents.forEach((currentBtn) => {
//     let tabId = currentBtn.getAttribute('data-tab');
//     let currentTab = tab.querySelector(tabId);

//     currentBtn.onclick = () => {
//       let isActive = currentBtn.classList.contains('active');
//       let isToggleParent = currentBtn.getAttribute('data-toggle-parent') === '';
//       let parent = currentBtn.parentElement.parentElement;

//       clearActives(isToggleParent);

//       if (!isActive || tab.classList.contains('tabWrapper--hover')) {
//         currentBtn.classList.add('active');
//         currentTab.classList.add('active');
//         if (isToggleParent) parent.classList.add('active');
//       }
//     };
//     if (tab.classList.contains('tabWrapper--hover'))
//       currentBtn.onmouseover = () => {
//         clearActives();
//         currentBtn.classList.add('active');
//         currentTab.classList.add('active');
//       };
//   });
// });

// const links = document.querySelectorAll(".links");
// const sections = document.querySelectorAll(".anchor");
// function changeLinkState() {
//   let index = sections.length;
//   while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
//   links.forEach((link) => link.classList.remove("active"));
//   links[index]?.classList.add("active");
// }
// links.forEach((e) => {
//   onLinkClick(e);
// });
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// window.onscroll = function () {
//   changeLinkState();
// };

///
///
///
///WOW JS
// new WOW().init({
//   boxClass: "wow",
// });
// const dropdown = document.querySelectorAll(".dropdown");
// dropdown.forEach((item) => {
//   const button = item.querySelector(".dropdown__button");
//   const content = item.querySelector(".dropdown__content");
//   button.addEventListener("click", (e) => {
//     button.classList.toggle("active");
//     content.classList.toggle("active");
//     window.addEventListener("click", (e) => {
//       if (!item.contains(e.target)) {
//         button.classList.remove("active");
//         content.classList.remove("active");
//       }
//     });
//   });
// });

// video ----------------
// const video = document.querySelector("#video");
// if (video) {
//   const videoButton = document.getElementById("videoButton");
//   const videoBg = document.getElementById("videoBg");
//   const videoBody = document.querySelector(".video__content");
//   let videoCondition = false;

//   const playVideo = () => {
//     video.play();
//     video.setAttribute("controls", "");
//     videoBg.classList.add("active");
//     videoButton.classList.add("_stop");
//     video.addEventListener("mouseover", function () {
//       videoButton.classList.remove("_hide");
//     });
//     video.addEventListener("mouseout", function (e) {
//       videoButton.classList.add("_hide");
//     });
//     videoButton.addEventListener("mouseover", function () {
//       videoButton.classList.remove("_hide");
//     });
//   };

//   const pauseVideo = () => {
//     video.pause();
//     videoButton.classList.remove("_stop");
//     videoButton.classList.remove("_hide");
//     videoBg.classList.remove("active");
//     video.addEventListener("mouseout", function (e) {
//       videoButton.classList.remove("_hide");
//     });
//   };

//   const videoControl = () => {
//     videoButton.onclick = () => {
//       if (videoCondition) {
//         playVideo();
//       } else {
//         pauseVideo();
//       }
//     };
//     video.addEventListener("ended", function () {
//       pauseVideo();
//       videoCondition = !videoCondition;
//     });
//   };

//   const videoTouch = () => {
//     videoControl();
//     videoBody.addEventListener("click", () => {
//       videoCondition = !videoCondition;
//       if (videoCondition) {
//         playVideo();
//       } else {
//         pauseVideo();
//       }
//     });
//   };
//   videoTouch();
// }
// video ----------------

// const copyButton = document.getElementById("copyButton");
// if (copyButton) {
//   const tooltipText = document.getElementById("tooltipText");
//   copyButton.onclick = () => {
//     var copyText = document.getElementById("copyTextarea");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);
//     tooltipText.innerHTML = "Copied";
//   };
// }

// counter ------------
// const amounts = document.querySelector(".amounts");
// if (amounts) {
//   const animationDuration = 2000;
//   const frameDuration = 1000 / 60;
//   const totalFrames = Math.round(animationDuration / frameDuration);
//   const easeOutQuad = (t) => t * (2 - t);
//   let isCounting = true;
//   const animateCountUp = (el) => {
//     let frame = 0;
//     const countTo = parseInt(el.getAttribute("data-count"), 10);
//     const counter = setInterval(() => {
//       frame++;
//       const progress = easeOutQuad(frame / totalFrames);
//       const currentCount = Math.round(countTo * progress);
//       if (parseInt(20, 10) !== currentCount) {
//         el.innerHTML = currentCount;
//       }
//       if (frame === totalFrames) {
//         clearInterval(counter);
//       }
//     }, frameDuration);
//   };
//   const runAnimations = () => {
//     const countupEls = document.querySelectorAll(".counter");
//     countupEls.forEach(animateCountUp);
//   };
//   const isVisible = function (elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       bounding.right <=
//         (window.innerWidth || document.documentElement.clientWidth)
//     );
//   };
//   document.addEventListener("scroll", () => {
//     const visible = isVisible(amounts);
//     if (visible && isCounting) {
//       runAnimations();
//       isCounting = false;
//     }
//   });
// }
// counter ------------

// let scrollTop = document.getElementById("scrollTop");
// if (scrollTop) {
//   scrollTop.onclick = () => {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   };
// }
//
