function mostrarAleatorio() {
    const container = document.getElementById('aleatorio');
    container.innerHTML = '<h2>Pokémon Aleatorio</h2><p>Cargando...</p>';
  
    const id = Math.floor(Math.random() * 1025) + 1;
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        const tipos = data.types.map(t => t.type.name).join(', ');
        const stats = data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join('');
  
        container.innerHTML = `
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p><strong>ID:</strong> #${data.id}</p>
          <p><strong>Tipo(s):</strong> ${tipos}</p>
          <h3>Estadísticas</h3>
          <ul>${stats}</ul>
  
          <button onclick="capturarPokemon(${data.id}, '${data.name}')">📥 Capturar</button>
          <button onclick="agregarFavorito(${data.id}, '${data.name}')">⭐ Favorito</button>
          <br><br>
          <button onclick="mostrarAleatorio()">🔁 Otro Pokémon</button>
        `;
      })
      .catch(err => {
        container.innerHTML = '<p>Error al cargar Pokémon aleatorio.</p>';
        console.error(err);
      });
  }
  
  document.addEventListener('DOMContentLoaded', mostrarAleatorio);