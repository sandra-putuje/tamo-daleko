/* maldivi-sledeca.js */

/* ► 1. Uredi spisak (redosled = redosled čitanja) */
const price = [
  { naslov: "Preporuka Putujuće žabe",  fajl: "putujuca_zaba.html" },
  { naslov: "Može li još nešto da krene naopako?", fajl: "nesto_naopako.html" },
  { naslov: "Let i ostrvca iz vazduha", fajl: "let_ostrva.html" },
  { naslov: "Mi smo u razglednici", fajl: "razglednica.html" },
  { naslov: "Videla sam slavnu Dori!", fajl: "dori.html" },
  { naslov: "Doručak sa pogledom na jato delfina", fajl: "delfini.html" },
  { naslov: "Džungla", fajl: "dzungla.html" },
  { naslov: "Poklon", fajl: "poklon.html" },
  { naslov: "Život na ostrvu", fajl: "zivot_na_ostrvu.html" },
  { naslov: "Dobri duh Aslam", fajl: "aslam.html" },
  { naslov: "Kornjače", fajl: "kornjace.html" },
  { naslov: "Samo te gledam", fajl: "samo_te_gledam.html" },
  { naslov: "Samo je otrovna, nije opasna", fajl: "otrovna_nije_opasna.html" },
  { naslov: "Plivanje u haljini", fajl: "haljina.html" },
  { naslov: "Pas? Ne može", fajl: "pas.html" },
  { naslov: "Beba ajkula i bućkanje u hladu", fajl: "beba_ajkula.html" },
  { naslov: "Vrane kradljivice", fajl: "vrane.html" },
  { naslov: "Deca", fajl: "deca.html" },
  { naslov: "Hobotnica", fajl: "hobotnica.html" },
  { naslov: "Prdeća baba", fajl: "prdeca_baba.html" },
  { naslov: "Badu Beru", fajl: "badu_beru.html" },
  { naslov: "Rasute plave zvezde po obali", fajl: "plave_zvezde.html" },
  { naslov: "\"Hello, Sandra!\"", fajl: "hello_sandra.html" },
  { naslov: "U turskom sedu pod maldivskim zvezdama", fajl: "turski_sed.html" },
  { naslov: "Lokalci u moru", fajl: "lokalci.html" },
  { naslov: "Pecanje", fajl: "pecanje.html" },
  { naslov: "Najlepša slika sa Maldiva", fajl: "najlepsa_slika.html" }
];

/* ► 2. Ako je ovo priča – pronađi je u nizu */
const fajlStranice = window.location.pathname.split("/").pop();
const indeks = price.findIndex(p => p.fajl === fajlStranice);

/* ► 3. Prikaži sledeću (ako postoji) */
if (indeks > -1 && indeks < price.length - 1) {
  const sledeca = price[indeks + 1];

  /* kreiramo minimalan blok */
  const div = document.createElement("div");
  div.style.marginTop = "3em";
  div.style.paddingTop = "2em";
  div.style.borderTop = "1px solid #ccc";
  div.style.textAlign = "center";

  div.innerHTML = `
    <p style="margin-bottom:0.5em;">📖 Sledeća priča:</p>
    <a href="${sledeca.fajl}" style="text-decoration:underline;font-weight:bold;color:#006699;">
      ${sledeca.naslov}
    </a>
  `;

  /* ubacujemo ga pre zatvaranja body‑ja */
  document.body.appendChild(div);
}
