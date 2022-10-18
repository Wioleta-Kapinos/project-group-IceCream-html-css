(() => {
  const refs = {
    openModalBtnLoc: document.querySelector('[data-our-locations-modal-open]'),
    closeModalBtnLoc: document.querySelector('[data-our-locations-modal-close]'),
    modalLoc: document.querySelector('[data-our-locations-modal]'),
  };

  refs.openModalBtnLoc.addEventListener('click', toggleModal);
  refs.closeModalBtnLoc.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalLoc.classList.toggle('is-hidden');
  }
})();
