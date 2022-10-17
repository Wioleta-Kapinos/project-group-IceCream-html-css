(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
    openModalBtnMobile: document.querySelector('[data-buy-now-modal-open-mobile]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
    modal: document.querySelector('[data-buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
