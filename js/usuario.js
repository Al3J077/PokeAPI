function mostrarUsuario() {
    const container = document.getElementById('usuario');
    container.innerHTML = `
      <h2>👤 Perfil del Usuario</h2>
      <p><strong>Nombre:</strong> Entrenador Pokémon</p>
      <p><strong>Número de capturados:</strong> ${obtenerCantidad('capturados')}</p>
      <p><strong>Favoritos:</strong> ${obtenerCantidad('favoritos')}</p>
      <p><strong>Fecha de inicio:</strong> ${obtenerFechaInicio()}</p>
    `;
  }
  
  function obtenerCantidad(tipo) {
    const datos = JSON.parse(localStorage.getItem(tipo)) || [];
    return datos.length;
  }
  
  function obtenerFechaInicio() {
    let fecha = localStorage.getItem('fechaInicio');
    if (!fecha) {
      fecha = new Date().toLocaleDateString();
      localStorage.setItem('fechaInicio', fecha);
    }
    return fecha;
  }
  
  document.addEventListener('DOMContentLoaded', mostrarUsuario);
  