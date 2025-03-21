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

// const tabWrapper = document.querySelectorAll(".tabWrapper");
// tabWrapper.forEach((tab) => {
//   const tabEvents = tab.querySelectorAll(".tabBtn");
//   const tabContainer = tab.querySelectorAll(".tabContainer");
//   const clearActives = (clearParent = false) => {
//     tabEvents.forEach(function (item) {
//       item.classList.remove("active");

//       let parent = item.parentElement.parentElement;
//       if (clearParent) parent.classList.remove("active");
//     });
//     tabContainer.forEach(function (item) {
//       item.classList.remove("active");
//     });
//   };
//   tabEvents.forEach((currentBtn) => {
//     let tabId = currentBtn.getAttribute("data-tab");
//     let currentTab = tab.querySelector(tabId);

//     currentBtn.onclick = () => {
//       let isActive = currentBtn.classList.contains("active");
//       let isToggleParent = currentBtn.getAttribute("data-toggle-parent") === "";
//       let parent = currentBtn.parentElement.parentElement;

//       clearActives(isToggleParent);

//       if (!isActive || tab.classList.contains("tabWrapper--hover")) {
//         currentBtn.classList.add("active");
//         currentTab.classList.add("active");
//         if (isToggleParent) parent.classList.add("active");
//       }
//     };
//     if (tab.classList.contains("tabWrapper--hover"))
//       currentBtn.onmouseover = () => {
//         clearActives();
//         currentBtn.classList.add("active");
//         currentTab.classList.add("active");
//       };
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
