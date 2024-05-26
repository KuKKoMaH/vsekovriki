const $body = $('body');
const $popup = $(".citySelect__popup");
const popupActiveClassName = "citySelect__popup--active";

const onClickOutside = (event) => {
  const $target = $(event.target);
  if (!$target.closest($popup).length) {
    event.preventDefault();
    event.stopPropagation();
    closePopup();
  }
};

const openPopup = () => {
  $popup.addClass(popupActiveClassName);
  setTimeout(() => $body.on('click', onClickOutside));
}
const closePopup = () => {
  $popup.removeClass(popupActiveClassName);
  $body.off('click', onClickOutside);
}

$(".citySelect__button").on("click", () => {
  openPopup();
});

$(".citySelect__close").on("click", () => {
  closePopup();
});