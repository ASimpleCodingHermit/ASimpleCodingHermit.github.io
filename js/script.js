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
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
