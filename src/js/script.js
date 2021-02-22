window.addEventListener('load', function () {
  document.querySelector('.preloader').classList.add('opacity-0');
  // removing arrow function
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
  }, 1000);
});

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

// Aside Navigation
const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function () {
    // Remove Prev Section Class
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('prev-section');
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        // Add Prev Section Class
        allSection[j].classList.add('prev-section');
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');

    showSection(this);
  });
}

// Function showSection has the element argument. target is equal to element getting the attribute and splitting it from the id(#)
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
      navList[i].querySelector('a').classList.add('active');
    }
  }
  //
}
//
document.querySelector('.hire-me').addEventListener('click', function () {
  showSection(this);
  updateNav(this);
});

// Navigation Toggle
const navToggleBtn = document.querySelector('.nav-toggle'),
  aside = document.querySelector('.aside');
navToggleBtn.addEventListener('click', () => {
  asideSectionToggleBtn();
});

function asideSectionToggleBtn() {
  aside.classList.toggle('open');
  navToggleBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}
