import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css'

const lightbox = new PhotoSwipeLightbox({
  gallery: '.gallery',
  children: '.gallery__item',
  showHideAnimationType: 'zoom',
  pswpModule: () => import('photoswipe')
});
lightbox.init();
