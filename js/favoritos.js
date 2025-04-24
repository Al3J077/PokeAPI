document.getElementById('favoritos').innerHTML = '<h2>Favoritos</h2><p>Tus Pokémon favoritos se verán aquí.</p>';

function mostrarFavoritos() {
    const container = document.getElementById('favoritos');
    container.innerHTML = '<h2>Pokémon Favoritos</h2><div class="favoritos-lista"></div>';
  
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const lista = container.querySelector('.favoritos-lista');
  
    if (favoritos.length === 0) {
      lista.innerHTML = '<p>No tienes Pokémon favoritos aún.</p>';
      return;
    }
  
    favoritos.forEach(pokemon => {
      lista.innerHTML += `
        <div class="pokemon-card" onclick="verDetalle(${pokemon.id})">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.nombre}">
          <p>#${pokemon.id} ${pokemon.nombre}</p>
        </div>
      `;
    });
  }
  
  document.addEventListener('DOMContentLoaded', mostrarFavoritos);
  