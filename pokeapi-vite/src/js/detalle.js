function mostrarPestaña(id) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

window.verDetalle = async function(id) {
    mostrarPestaña('detalle');

    const container = document.getElementById('detalle');
    container.innerHTML = '<p>Cargando detalles...</p>';

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        const tipos = data.types.map(t => t.type.name).join(', ');
        const stats = data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join('');

        container.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>ID:</strong> #${data.id}</p>
            <p><strong>Tipo(s):</strong> ${tipos}</p>
            <h3>Estadísticas</h3>
            <ul>${stats}</ul>

            <button onclick="capturarPokemon(${data.id}, &quot;${data.name}&quot;)">📥 Capturar</button>
            <button onclick="agregarFavorito(${data.id}, &quot;${data.name}&quot;)">⭐ Favorito</button>
        `;
    } catch (error) {
        container.innerHTML = '<p>Error al cargar los detalles del Pokémon.</p>';
        console.error(error);
    }
}

window.capturarPokemon = function(id, nombre) {
    let capturados = JSON.parse(localStorage.getItem('capturados')) || [];
    if (!capturados.find(p => p.id === id)) {
        capturados.push({ id, nombre });
        localStorage.setItem('capturados', JSON.stringify(capturados));
        alert(`${nombre} ha sido capturado!`);
    } else {
        alert(`${nombre} ya está capturado.`);
    }
}

window.agregarFavorito = function(id, nombre) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritos.find(p => p.id === id)) {
        favoritos.push({ id, nombre });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert(`${nombre} se agregó a favoritos!`);
    } else {
        alert(`${nombre} ya está en favoritos.`);
    }
}