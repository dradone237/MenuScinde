const btn = document.querySelector('.btn');
const menu = document.querySelector('.conteneurMenu');
const MenuListItem = document.querySelectorAll('.menuListItem');
const iconeMenu = document.querySelector('.menuIcon');
let i = 0;

const TL = new TimelineMax({ paused: true });

TL
  .to(menu, 1, { width: '30%' })
  .staggerTo(MenuListItem, 0.3, { opacity: 1, x: 0 }, 0.2, '-=0.75');

btn.addEventListener('click', () => {
  if (i === 0) {
    i++;
    TL.play();
    iconeMenu.src = 'croix.svg';
  } else {
    i--;
    TL.reverse();
    iconeMenu.src = 'menu.svg'
  }
});

MenuListItem.forEach(item => item.addEventListener('click', () => {
  i--;
  TL.reverse();
  iconeMenu.src = 'menu.svg';
}));