(() => {
  const refs = {
    openModalBtnBuy: document.querySelector('[data-buy-now-modal-open]'),
    openModalBtnBuyMobile: document.querySelector('[data-buy-now-modal-open-mobile]'),
    closeModalBtnBuy: document.querySelector('[data-buy-now-modal-close]'),
    modalBuy: document.querySelector('[data-buy-now-modal]'),
  };

  refs.openModalBtnBuy.addEventListener('click', toggleModal);
  refs.openModalBtnBuyMobile.addEventListener('click', toggleModal);
  refs.closeModalBtnBuy.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalBuy.classList.toggle('is-hidden');
  }
})();
