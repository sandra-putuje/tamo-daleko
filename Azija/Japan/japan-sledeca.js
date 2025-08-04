// japan-sledeca.js
// Čita niz priča iz localStorage-a (postavljen na index stranici Japana)
(function() {
  const listaJSON = localStorage.getItem('japanList');
  if (!listaJSON) return; // nema liste, ne radimo ništa

  let lista;
  try {
    lista = JSON.parse(listaJSON);
  } catch (e) {
    return;
  }
  if (!Array.isArray(lista) || lista.length < 2) return;

  const trenutniFajl = window.location.pathname.split('/').pop();
  const idx = lista.findIndex(p => p.fajl === trenutniFajl);
  if (idx === -1) return;

  const sledeci = lista[(idx + 1) % lista.length];
  if (!sledeci) return;

  const div = document.createElement('div');
  div.innerHTML = `
    <p style="margin-top:3rem;margin-bottom:0.5em;">📖 Sledeća priča:</p>
    <a href="${sledeci.fajl}" style="text-decoration:underline;font-weight:bold;color:#006699;">
      ${sledeci.ime}
    </a>
  `;
  document.body.appendChild(div);
})();
