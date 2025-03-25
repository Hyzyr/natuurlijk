
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
// filter start -------------------------------
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
// filter end -------------------------------
