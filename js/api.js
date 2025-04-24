// Mostrar pestaña
function mostrarPestaña(id) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  
  // Ocultar splash y mostrar app
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('app').style.display = 'block';
  }, 2500);
  