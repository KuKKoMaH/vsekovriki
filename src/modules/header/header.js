import Breakpoints from 'breakpoints-js';

const $body = $('body');
const $header = $('.header');
const searchClass = 'header--search';
const catalogClass = 'header--catalog';
const menuClass = 'header--menu';
const submenuClass = 'header--submenu';
const cartClass = 'header--cart';

const onClickOutside = (event) => {
  const $target = $(event.target);
  if (!$target.closest($('.header__menu')).length) {
    event.preventDefault();
    event.stopPropagation();
    closeSearch();
    closeCatalog();
    closeMenu();
    closeCart();
  }
};

let isSearchOpen = false;
const openSearch = () => {
  isSearchOpen = true;
  $header.addClass(searchClass);
  closeMenu();
  closeCatalog();
  closeCart();
  setTimeout(() => $body.on('click', onClickOutside));
  setTimeout(() => $('.header__search input').focus(), 100);
};
const closeSearch = () => {
  isSearchOpen = false;
  $header.removeClass(searchClass);
  $body.off('click', onClickOutside);
};

let isCatalogOpen = false;
const openCatalog = () => {
  isCatalogOpen = true;
  $header.addClass(catalogClass);
  closeSearch();
  closeMenu();
  closeCart();
  setTimeout(() => $body.on('click', onClickOutside));
};
const closeCatalog = () => {
  isCatalogOpen = false;
  $header.removeClass(catalogClass);
  $body.off('click', onClickOutside);
};

let isMenuOpen = false;
const openMenu = () => {
  isMenuOpen = true;
  $header.addClass(menuClass);
  closeSearch();
  closeCatalog();
  closeCart();
  setTimeout(() => $body.on('click', onClickOutside));
};
const closeMenu = () => {
  isMenuOpen = false;
  $header.removeClass(menuClass);
  $body.off('click', onClickOutside);
};

$('.header__searchButton').on('click', () => {
  isSearchOpen
    ? closeSearch()
    : openSearch();
});

$('.header__catalogButton').on('click', () => {
  isCatalogOpen
    ? closeCatalog()
    : openCatalog();
});

$('.header__menuButton').on('click', () => {
  isMenuOpen
    ? closeMenu()
    : openMenu();
});

$('.header__menuClose').on('click', () => {
  closeMenu()
});

$('.search__close').on('click', closeSearch);

// ====================================

let isCartOpen = false;
const openCart = () => {
  isCartOpen = true;
  $header.addClass(cartClass);
  closeSearch();
  closeMenu();
  closeCatalog();
  $body.on('click', onClickOutside);
};
const closeCart = () => {
  isCartOpen = false;
  $header.removeClass(cartClass);
  $body.off('click', onClickOutside);
};
$('.header__cart--top').on('click', (e) => {
  e.preventDefault();
  isCartOpen
    ? closeCart()
    : openCart();
});

// ====================================


$('.header__menu li:has(.header__submenu) a').on('click', (e) => {
  if (Breakpoints.is('sm')) {
    e.preventDefault();
    $header.addClass(submenuClass);
    $('.header__menu li').removeClass('active');
    $(e.delegateTarget).parents('li').addClass('active');
  }
});

$('.header__back').on('click', () => {
  $header.removeClass(submenuClass);
});
