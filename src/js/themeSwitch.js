const links = document.querySelectorAll('.alternate-style'),
  totalLinks = links.length;

const setActiveStyle = (color) => {
  for (let i = 0; i < totalLinks; i++) {
    if (color == links[i].getAttribute('title')) {
      links[i].removeAttribute('disabled');
    } else {
      links[i].setAttribute('disabled', 'true');
    }
  }
};

// Skin Change
const skinChange = document.querySelectorAll('.theme-skin'),
  totalSkinChange = skinChange.length;
for (let i = 0; i < totalSkinChange; i++) {
  skinChange[i].addEventListener('change', function () {
    if (this.value === 'dark') {
      document.body.className = 'dark';
    } else {
      document.body.className = '';
    }
  });
}

document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.querySelector('.theme-switcher').classList.toggle('open');
});
