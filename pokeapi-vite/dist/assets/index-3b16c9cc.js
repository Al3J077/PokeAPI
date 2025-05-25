(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();setTimeout(()=>{document.getElementById("splash").style.display="none",document.getElementById("app").style.display="block"},2500);function c(){const e=document.getElementById("aleatorio");e.innerHTML="<h2>Pokémon Aleatorio</h2><p>Cargando...</p>";const r=Math.floor(Math.random()*1025)+1;fetch(`https://pokeapi.co/api/v2/pokemon/${r}`).then(t=>t.json()).then(t=>{const o=t.types.map(a=>a.type.name).join(", "),n=t.stats.map(a=>`<li>${a.stat.name}: ${a.base_stat}</li>`).join("");e.innerHTML=`
          <h2>${t.name.toUpperCase()}</h2>
          <img src="${t.sprites.front_default}" alt="${t.name}">
          <p><strong>ID:</strong> #${t.id}</p>
          <p><strong>Tipo(s):</strong> ${o}</p>
          <h3>Estadísticas</h3>
          <ul>${n}</ul>
  
          <button onclick="capturarPokemon(${t.id}, '${t.name}')">📥 Capturar</button>
          <button onclick="agregarFavorito(${t.id}, '${t.name}')">⭐ Favorito</button>
          <br><br>
          <button onclick="mostrarAleatorio()">🔁 Otro Pokémon</button>
        `}).catch(t=>{e.innerHTML="<p>Error al cargar Pokémon aleatorio.</p>",console.error(t)})}document.addEventListener("DOMContentLoaded",c);function l(){const e=document.getElementById("capturados");e.innerHTML='<h2>Pokémon Capturados</h2><div class="capturados-lista"></div>';const r=JSON.parse(localStorage.getItem("capturados"))||[],t=e.querySelector(".capturados-lista");if(r.length===0){t.innerHTML="<p>No has capturado ningún Pokémon aún.</p>";return}r.forEach(o=>{t.innerHTML+=`
        <div class="pokemon-card" onclick="verDetalle(${o.id})">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o.id}.png" alt="${o.nombre}">
          <p>#${o.id} ${o.nombre}</p>
        </div>
      `})}document.addEventListener("DOMContentLoaded",l);function d(e){document.querySelectorAll(".tab").forEach(r=>r.classList.remove("active")),document.getElementById(e).classList.add("active")}window.verDetalle=async function(e){d("detalle");const r=document.getElementById("detalle");r.innerHTML="<p>Cargando detalles...</p>";try{const o=await(await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)).json(),n=o.types.map(s=>s.type.name).join(", "),a=o.stats.map(s=>`<li>${s.stat.name}: ${s.base_stat}</li>`).join("");r.innerHTML=`
            <h2>${o.name.toUpperCase()}</h2>
            <img src="${o.sprites.front_default}" alt="${o.name}">
            <p><strong>ID:</strong> #${o.id}</p>
            <p><strong>Tipo(s):</strong> ${n}</p>
            <h3>Estadísticas</h3>
            <ul>${a}</ul>

            <button onclick="capturarPokemon(${o.id}, &quot;${o.name}&quot;)">📥 Capturar</button>
            <button onclick="agregarFavorito(${o.id}, &quot;${o.name}&quot;)">⭐ Favorito</button>
        `}catch(t){r.innerHTML="<p>Error al cargar los detalles del Pokémon.</p>",console.error(t)}};window.capturarPokemon=function(e,r){let t=JSON.parse(localStorage.getItem("capturados"))||[];t.find(o=>o.id===e)?alert(`${r} ya está capturado.`):(t.push({id:e,nombre:r}),localStorage.setItem("capturados",JSON.stringify(t)),alert(`${r} ha sido capturado!`))};window.agregarFavorito=function(e,r){let t=JSON.parse(localStorage.getItem("favoritos"))||[];t.find(o=>o.id===e)?alert(`${r} ya está en favoritos.`):(t.push({id:e,nombre:r}),localStorage.setItem("favoritos",JSON.stringify(t)),alert(`${r} se agregó a favoritos!`))};function p(){const e=document.getElementById("favoritos");e.innerHTML='<h2>Pokémon Favoritos</h2><div class="favoritos-lista"></div>';const r=JSON.parse(localStorage.getItem("favoritos"))||[],t=e.querySelector(".favoritos-lista");if(r.length===0){t.innerHTML="<p>No tienes Pokémon favoritos aún.</p>";return}r.forEach(o=>{t.innerHTML+=`
        <div class="pokemon-card" onclick="verDetalle(${o.id})">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${o.id}.png" alt="${o.nombre}">
          <p>#${o.id} ${o.nombre}</p>
        </div>
      `})}document.addEventListener("DOMContentLoaded",p);async function u(){const e=document.getElementById("lista");e.innerHTML='<h2>Lista de los 1025 Pokémon</h2><div class="lista-pokemon"></div>';try{const t=await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025")).json(),o=e.querySelector(".lista-pokemon");t.results.forEach((n,a)=>{const s=a+1;o.innerHTML+=`
          <div class="pokemon-card" onclick="verDetalle(${s})">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${s}.png" alt="${n.name}" />
            <p>#${s} ${n.name}</p>
          </div>
        `})}catch(r){e.innerHTML="<p>Error cargando los Pokémon.</p>",console.error(r)}}u();function m(){const e=document.getElementById("usuario");e.innerHTML=`
      <h2>👤 Perfil del Usuario</h2>
      <p><strong>Nombre:</strong> Entrenador Pokémon</p>
      <p><strong>Número de capturados:</strong> ${i("capturados")}</p>
      <p><strong>Favoritos:</strong> ${i("favoritos")}</p>
      <p><strong>Fecha de inicio:</strong> ${g()}</p>
    `}function i(e){return(JSON.parse(localStorage.getItem(e))||[]).length}function g(){let e=localStorage.getItem("fechaInicio");return e||(e=new Date().toLocaleDateString(),localStorage.setItem("fechaInicio",e)),e}document.addEventListener("DOMContentLoaded",m);document.addEventListener("DOMContentLoaded",()=>{mostrarPestaña("lista")});
