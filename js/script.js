// Portfolio Item Filter
const filterContainer = document.querySelector('.portfolio-filter');
const filterBtns = filterContainer.children;
const totalBtns = filterBtns.length;
const portfolioItems = document.querySelectorAll('.portfolio-item');
const totalPortfolioItems = portfolioItems.length;
console.log(totalPortfolioItems);

for (let i = 0; i < totalBtns; i++) {
  filterBtns[i].addEventListener('click', function () {
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');
  });
}
