const menuConsolas = document.querySelector('.consoles-menu');
const botonConsolas = document.querySelector('.consoles-button');

// contraer el menú de las consolas al presionar el botón de las consolas:
function mostrarConsolas() {
    menuConsolas.classList.toggle('show');
  }

// Cierra el menú al hacer clic fuera
document.addEventListener('click', (e) => {

    if (!menuConsolas.contains(e.target) && !botonConsolas.contains(e.target)) {
      menuConsolas.classList.remove('show');
    }
  });
  // cerrar el menú con la tecla ESC:
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menuConsolas.classList.remove('show');
    }
  });