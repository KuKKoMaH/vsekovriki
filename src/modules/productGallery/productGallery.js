import initSlider from "src/js/initSlider";

const { getInstance } = initSlider('.productGallery__slider', ($el) => ({
  wrapperClass: 'productGallery__slides',
  slideClass:   'productGallery__slide',
  // direction:    'vertical',
  // navigation:   {
  //   prevEl: $el.parents('.hints').find('.hints__nav--prev')[0],
  //   nextEl: $el.parents('.hints').find('.hints__nav--next')[0],
  // },
  pagination: {
    el:        $el.parents('.productGallery').find('.productGallery__pagination')[0],
    clickable: true,
  },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 1,
  spaceBetween:  0,
  // autoHeight:    true,
}))

$('.productGallery__thumbButton').on('click', (e) => {
  const $el = $(e.currentTarget).parents('.productGallery__thumb');
  const index = $el.index();
  const swiper = getInstance();
  swiper.slideTo(index);
});