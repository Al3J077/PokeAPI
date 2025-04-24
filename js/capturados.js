document.getElementById('capturados').innerHTML = '<h2>Pokémon Capturados</h2><p>Aquí aparecerán los que captures.</p>';

function mostrarCapturados() {
    const container = document.getElementById('capturados');
    container.innerHTML = '<h2>Pokémon Capturados</h2><div class="capturados-lista"></div>';
  
    const capturados = JSON.parse(localStorage.getItem('capturados')) || [];
    const lista = container.querySelector('.capturados-lista');
  
    if (capturados.length === 0) {
      lista.innerHTML = '<p>No has capturado ningún Pokémon aún.</p>';
      return;
    }
  
    capturados.forEach(pokemon => {
      lista.innerHTML += `
        <div class="pokemon-card" onclick="verDetalle(${pokemon.id})">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.nombre}">
          <p>#${pokemon.id} ${pokemon.nombre}</p>
        </div>
      `;
    });
  }
  
  document.addEventListener('DOMContentLoaded', mostrarCapturados);
  