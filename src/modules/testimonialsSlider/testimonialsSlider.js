import initSlider from "src/js/initSlider";
import { BREAKPOINT_LG } from "src/js/breakpoints";

initSlider('.testimonialsSlider__slider', ($el) => ({
  wrapperClass: 'testimonialsSlider__slides',
  slideClass:   'testimonialsSlider__slide',
  // direction:    'vertical',
  navigation: {
    prevEl: $el.parents('.testimonialsSlider').find('.testimonialsSlider__nav--prev')[0],
    nextEl: $el.parents('.testimonialsSlider').find('.testimonialsSlider__nav--next')[0],
  },
  // pagination:      {
  //   el:        $el.parents('.frontSlider').find('.frontSlider__pagination')[0],
  //   clickable: true,
  // },
  // touchEventsTarget: 'wrapper',
  centeredSlides: true,
  slidesPerView:  'auto',
  loop:           true,
  spaceBetween:   0,
  breakpoints:    {
    [BREAKPOINT_LG]: {
      centeredSlides: false,
    }
  }
}))