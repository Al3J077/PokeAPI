async function cargarLista() {
    const container = document.getElementById('lista');
    container.innerHTML = '<h2>Lista de los 1025 Pokémon</h2><div class="lista-pokemon"></div>';
  
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
      const data = await res.json();
      const listaContainer = container.querySelector('.lista-pokemon');
  
      data.results.forEach((pokemon, index) => {
        const id = index + 1;
        listaContainer.innerHTML += `
          <div class="pokemon-card" onclick="verDetalle(${id})">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${pokemon.name}" />
            <p>#${id} ${pokemon.name}</p>
          </div>
        `;
      });
  
    } catch (error) {
      container.innerHTML = '<p>Error cargando los Pokémon.</p>';
      console.error(error);
    }
  }

  cargarLista();