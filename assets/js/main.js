const navMenu = document.getElementById('nav-menu'),  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*===== CART SHOW =====*/
/* Validate if constant exists */
const cart = document.getElementById('cart'),
  cartShop = document.getElementById('cart-shop'),
  cartClose = document.getElementById('cart-close');

if (cartShop) {
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart');
  });
}
/*===== CART HIDDEN =====*/
/* Validate if constant exists */

if (cartClose) {
  cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart');
  });
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
  loginButton = document.getElementById('login-button'),
  loginClose = document.getElementById('login-close');

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
  loginButton.addEventListener('click', () => {
    login.classList.add('show-login');
  });
}
/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
  loginClose.addEventListener('click', () => {
    login.classList.remove('show-login');
  });
}
/*=============== HOME SWIPER ===============*/
var homeswiper = new Swiper('.home-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper('.new-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  centeredSlide: true,
  loop: true,
});
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/
const accordianItem = document.querySelectorAll('.question__item');

accordianItem.forEach((item) => {
  const accordianHeader = item.querySelector('.question__header');

  accordianHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordian-open');

    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordianContent = item.querySelector('.question__content');
  if (item.classList.contains('accordian-open')) {
    accordianContent.removeAttribute('style');
    item.classList.remove('accordian-open');
  } else {
    accordianContent.style.height = accordianContent.scrollHeight + 'px';
    item.classList.add('accordian-open');
  }
};

/*=============== lightbox ===============*/

const ProductItems = document.querySelectorAll('.product__img'),
  totalProductItems = ProductItems.length,
  lightbox = document.querySelector('.lightbox'),
  lightboxImg = lightbox.querySelector('.lightbox__img'),
  lightboxClose = lightbox.querySelector('.lightbox__close'),
  lightboxCounter = lightbox.querySelector('.caption__counter');

let itemIndex = 0;
for (let i = 0; i < totalProductItems; i++) {
  // console.log(ProductItems[i]);
  ProductItems[i].addEventListener('click', function () {
    // console.log(i);
    itemIndex = i;
    changeItem();
    togglelightbox();
  });
}
function nextItem() {
  if (itemIndex == totalProductItems - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
  // console.log(itemIndex);
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalProductItems - 1;
  } else {
    itemIndex--;
  }
  changeItem();
  // console.log(itemIndex);
}
function togglelightbox() {
  lightbox.classList.toggle('open');
}

function changeItem() {
  imgsrc = ProductItems[itemIndex]
    .querySelector('.product__img img')
    .getAttribute('src');
  // console.log(imgsrc);
  lightboxImg.src = imgsrc;
  lightboxCounter.innerHTML = itemIndex + 1 + ` of ` + totalProductItems;
}

//close lightbox

lightbox.addEventListener('click', function () {
  if (event.target === lightboxClose || event.target === lightbox) {
    togglelightbox();
  }
});

// console.log(totalProductItems);

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style__switcher').classList.toggle('open');
});
