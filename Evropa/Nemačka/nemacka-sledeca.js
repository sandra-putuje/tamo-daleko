const listaPrica = [
  { ime: "Krug: Nemačka, Francuska, Švajcarska, Lihtenštajn", fajl: "krug.html" },
  { ime: "Muvanje", fajl: "muvanje.html" },
  { ime: "Nemački", fajl: "nemacki.html" },
  { ime: "Prijatelji, note i novo more planova", fajl: "prijatelji-note-novo-more-planova.html" },
  { ime: "‘Ju, znači ju, što je lepo’ - jutro u Karlsrueu", fajl: "ju-znaci-ju-karlsruhe.html" },
  { ime: "Strazbur: Od bosih nogu do Evropskog parlamenta", fajl: "strazbur.html" },
  { ime: "Kolmar u predvečerje: stari kutci, nova poznanstva", fajl: "kolmar.html" },
  { ime: "Jutro u najlepšem selu Francuske", fajl: "jutro-u-najlepsem-selu-francuske.html" },
  { ime: "Bodensko jezero, ukulele i giros - dan za pamćenje", fajl: "bodensko-jezero-ukulele-giros.html" },
  { ime: "Lucern: voziću se ja, ne zvala se Sandra", fajl: "lucern.html" },
  { ime: "Kad ti ChatGPT da savršen putni savet - Hajdi selo", fajl: "hajdi-selo.html" },
  { ime: "Ej, ljudi, mi smo u Lihtenštajnu!", fajl: "lihtenstajn.html" },
  { ime: "Cirkus u tri čina", fajl: "cirkus-u-tri-cina.html" },
  { ime: "Dvorci, jezero i kraljevske tajne", fajl: "dvorci-jezero-kraljevske-tajne.html" }
];

const trenutniFajl = window.location.pathname.split("/").pop();
const index = listaPrica.findIndex(p => p.fajl === trenutniFajl);
if (index > -1 && index < listaPrica.length - 1) {
  const sledeca = listaPrica[index + 1];
  const div = document.createElement('div');
  div.innerHTML = `
    <p style="margin-bottom:0.5em;">📖 Sledeća priča:</p>
    <a href="${sledeca.fajl}" style="text-decoration:underline; font-weight:bold; color:#006699;">
      ${sledeca.ime}
    </a>
  `;
  document.body.appendChild(div);
}
