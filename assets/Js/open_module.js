
  
  // JavaScript to handle modal open and close
  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalButton');
  const modal = document.getElementById('modal');

  openModalButton.addEventListener('click', () => {
      modal.classList.remove('hidden');
  });

  closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
  });

  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.classList.add('hidden');
      }
  });