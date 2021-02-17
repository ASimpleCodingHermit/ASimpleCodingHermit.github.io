// Portfolio Item Filter
const filterContainer = document.querySelector('.portfolio-filter');
const filterBtns = filterContainer.children;
const totalBtns = filterBtns.length;
const portfolioItems = document.querySelectorAll('.portfolio-item');
const totalPortfolioItems = portfolioItems.length;

for (let i = 0; i < totalBtns; i++) {
  filterBtns[i].addEventListener('click', function () {
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    const filterItems = this.getAttribute('data-filter');
    for (let j = 0; j < totalPortfolioItems; j++) {
      if (filterItems === portfolioItems[j].getAttribute('data-category')) {
        portfolioItems[j].classList.remove('hide');
        portfolioItems[j].classList.add('show');
      } else {
        portfolioItems[j].classList.remove('show');
        portfolioItems[j].classList.add('hide');
      }
      if (filterItems === 'all') {
        portfolioItems[j].classList.remove('hide');
        portfolioItems[j].classList.add('show');
      }
    }
  });
}

// Portfolio Lightbox Functionality
const lightbox = document.querySelector('.lightbox'),
  lightboxImg = lightbox.querySelector('.lightbox-img'),
  lightboxClose = lightbox.querySelector('.close-lb'),
  lightboxText = lightbox.querySelector('.caption-text'),
  lightboxCounter = lightbox.querySelector('.caption-counter');
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItems; i++) {
  portfolioItems[i].addEventListener('click', function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}
// Next Item Functionality
function nextItem() {
  if (itemIndex == totalPortfolioItems - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
  // console.log(itemIndex);
}
// Prev Item Functionality
function prevItem() {
  if (itemIndex == 0) {
    itemIndex = totalPortfolioItems - 1;
  } else {
    itemIndex--;
  }
  changeItem();
  // console.log(itemIndex);
}

// Toggle Lightbox
function toggleLightbox() {
  lightbox.classList.toggle('open');
}
// Change Item Functionality
function changeItem() {
  const imgSrc = portfolioItems[itemIndex]
    .querySelector('.portfolio-img img')
    .getAttribute('src');
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector(
    'h4',
  ).innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + ' of ' + totalPortfolioItems;
}

// Close Lightbox
lightbox.addEventListener('click', function (e) {
  if (e.target === lightboxClose) {
    toggleLightbox();
  }
});
