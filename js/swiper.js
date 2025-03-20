const settings = {
  latestSlider: {
    slidesPerView: 1.18,
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,

    breakpoints: {
      1360: {
        slidesPerView: 3,
        spaceBetween: 32,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
      },

      460: {
        slidesPerView: 'auto',
      },
    },
  },

  goodsSwiper: {
    slidesPerView: 1.2,
    spaceBetween: 16,

    breakpoints: {
      1520: {
        slidesPerView: 6,
        spaceBetween: 32,
      },

      1360: {
        slidesPerView: 5,
        spaceBetween: 32,
      },

      1025: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      940: {
        slidesPerView: 4,
        spaceBetween: 24,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      580: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      380: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  },

  brandsSlider: {
    slidesPerView: 'auto',
    spaceBetween: 8,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,

    breakpoints: {
      1520: {
        slidesPerView: 6,
        spaceBetween: 32,
      },

      1360: {
        slidesPerView: 5,
        spaceBetween: 32,
      },

      1025: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      940: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },

      580: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
      },
    },
  },
};

document.querySelectorAll('.swiper').forEach((swiperSlider) => {
  const settingsKey = swiperSlider.getAttribute('data-swiper');
  const thumbsSelector = swiperSlider.getAttribute('data-swiper-thumbs');
  const parentElement = swiperSlider.hasAttribute('data-swiper-parent')
    ? document.querySelector(swiperSlider.getAttribute('data-swiper-parent'))
    : swiperSlider.parentElement;
  const prev = parentElement.querySelector('.swiper-arrow-prev');
  const next = parentElement.querySelector('.swiper-arrow-next');
  const dots = parentElement.querySelector('.swiper-dots');
  const scroll = parentElement.querySelector('.swiper-scrollbar');
  const thumbs = thumbsSelector ? document.querySelector(thumbsSelector) : null;

  new Swiper(swiperSlider, {
    ...settings[settingsKey],
    // // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // // Navigation arrows
    navigation:
      next && prev
        ? {
            nextEl: next,
            prevEl: prev,
          }
        : {},
    scrollbar: scroll
      ? {
          el: scroll,
          hide: false,
          // draggable: true,
          enabled: true,
        }
      : {},
    pagination: dots
      ? {
          el: dots,
          clickable: true,
        }
      : {},
    thumbs: thumbs
      ? {
          swiper: thumbs,
        }
      : {},
  });
});
