import initSlider from "src/js/initSlider";

initSlider('.servicesSlider__slider', ($el) => ({
  wrapperClass: 'servicesSlider__slides',
  slideClass:   'servicesSlider__slide',
  // direction:    'vertical',
  // navigation:   {
  //   prevEl: $el.parents('.hints').find('.hints__nav--prev')[0],
  //   nextEl: $el.parents('.hints').find('.hints__nav--next')[0],
  // },
  // pagination:      {
  //   el:        $el.parents('.frontSlider').find('.frontSlider__pagination')[0],
  //   clickable: true,
  // },
  // touchEventsTarget: 'wrapper',
  // centeredSlides:        true,
  slidesPerView: 'auto',
  loop:          true,
  // loopAdditionalSlides: 1,
  spaceBetween: 0,
  // autoHeight:    true,

  autoplay: {
    delay: 0
  },
  speed: 10000,
  allowTouchMove: false,
}))