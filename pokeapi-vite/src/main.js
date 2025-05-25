// filepath: /pokeapi-vite/pokeapi-vite/src/main.js
import './assets/style.css';
import './js/api.js';
import './js/aleatorio.js';
import './js/capturados.js';
import './js/detalle.js';
import './js/favoritos.js';
import './js/lista.js';
import './js/usuario.js';

document.addEventListener('DOMContentLoaded', () => {
  mostrarPestaña('lista'); // Show the default tab
});