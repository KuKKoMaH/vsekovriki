import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Breakpoints from 'breakpoints-js';

Swiper.use([Navigation, Pagination, Autoplay]);

export default (selector, props, initOptions) => {
  if (!initOptions) initOptions = {};
  initOptions = Object.assign({}, {
    sm: true,
    md: true,
    lg: true,
  }, initOptions);

  const $wrapper = $(selector);
  let lastSlider = null;
  if ($wrapper.length) {
    $wrapper.each((i, el) => {
      let slider = null;
      const $el = $(el);

      const initSlider = () => {
        if (slider) return;
        const finalProps = typeof props === 'function' ? props($el) : props;
        if (!finalProps) return;
        lastSlider = slider = new Swiper(el, typeof props === 'function' ? props($el) : props);
        $el.data('swiper', slider);
        if (initOptions.afterInit) initOptions.afterInit(slider, $el);
      };

      const destroySlider = () => {
        if (!slider) return;
        slider.destroy();
        slider = null;
      };

      Breakpoints.on('sm', 'enter', () => {
        initOptions.sm ? initSlider() : destroySlider();
      });
      Breakpoints.on('md', 'enter', () => {
        initOptions.md ? initSlider() : destroySlider();
      });
      Breakpoints.on('lg', 'enter', () => {
        initOptions.lg ? initSlider() : destroySlider();
      });
    });
  }
  return {
    getInstance() {
      return lastSlider;
    },
  };
}
