export interface ProvenanceStop {
  label: string;
  unknown?: boolean;
}

export interface Piece {
  lot: string;
  type: string;
  title: string;
  maison: string;
  maisonName: string;
  city: string;
  year: number;
  designer: string;
  attribution: string;
  price: number;
  shadeTone: string;
  desc?: string;
  meta?: Record<string, string>;
  provenance?: ProvenanceStop[];
}

export const PIECES: Piece[] = [
  {
    lot: '0142', type: 'Lampada da tavolo', title: 'Modello 2128',
    maison: 'STILNOVO', maisonName: 'Stilnovo', city: 'Milano', year: 1962,
    designer: 'Bruno Gatta', attribution: 'Design attribuito a', price: 2400,
    shadeTone: '#E8E1D2',
    desc: 'Base in marmo di Carrara, stelo in ottone brunito, diffusore in vetro opalino. Etichetta Stilnovo originale presente sotto la base. In produzione tra il 1962 e il 1968. Cablatura sostituita; conforme CE; lampadina E14 inclusa.',
    meta: { 'Periodo': '1962', 'Materiali': 'marmo, ottone, opalino', 'Dimensioni': 'h 38 · ø 22 cm', 'Cablatura': 'sostituita, conforme CE', 'Etichetta': 'originale presente', 'Stato': 'eccellente' },
    provenance: [{ label: 'Milano, c. 1962' }, { label: 'Collezione privata, Lombardia' }, { label: 'Returned, 2026' }],
  },
  {
    lot: '0086', type: 'Sospensione', title: 'Modello 1109',
    maison: 'ARTELUCE', maisonName: 'Arteluce', city: 'Milano', year: 1968,
    designer: 'Gino Sarfatti', attribution: 'Design di', price: 4800,
    shadeTone: '#D9D2C2',
    desc: 'Sospensione in ottone e acciaio verniciato. Numero modello inciso sul braccio superiore. Cablatura sostituita; conforme CE.',
    meta: { 'Periodo': '1968', 'Materiali': 'ottone, acciaio', 'Dimensioni': 'h 120 · ø 60 cm', 'Cablatura': 'sostituita, conforme CE', 'Etichetta': 'presente', 'Stato': 'molto buono' },
    provenance: [{ label: 'Milano, c. 1968' }, { label: '—', unknown: true }, { label: 'Returned, 2026' }],
  },
  {
    lot: '0014', type: 'Lampada da tavolo', title: 'Vetro a incalmo',
    maison: 'MAZZEGA', maisonName: 'Mazzega', city: 'Murano', year: 1971,
    designer: 'Carlo Nason', attribution: 'Attribuito a', price: 3200,
    shadeTone: '#EFEAD8',
    desc: 'Corpo in vetro soffiato a incalmo con fascia opalina. Produzione vetreria Mazzega, Murano. Cablatura sostituita; conforme CE.',
    meta: { 'Periodo': '1971', 'Materiali': 'vetro soffiato, ottone', 'Dimensioni': 'h 44 · ø 28 cm', 'Cablatura': 'sostituita, conforme CE', 'Etichetta': 'assente', 'Stato': 'eccellente' },
    provenance: [{ label: 'Murano, c. 1971' }, { label: 'Collezione privata, Vicenza' }, { label: 'Returned, 2026' }],
  },
  {
    lot: '0231', type: 'Piantana', title: 'Modello 387',
    maison: 'O‑LUCE', maisonName: 'O‑Luce', city: 'Milano', year: 1974,
    designer: 'Vico Magistretti', attribution: 'Design di', price: 5400,
    shadeTone: '#E2DBC9',
    desc: 'Piantana in acciaio verniciato nero opaco con diffusore orientabile. Tre proprietari documentati. Cablatura sostituita; conforme CE.',
    meta: { 'Periodo': '1974', 'Materiali': 'acciaio, alluminio', 'Dimensioni': 'h 185 cm', 'Cablatura': 'sostituita, conforme CE', 'Etichetta': 'originale presente', 'Stato': 'buono' },
    provenance: [{ label: 'Milano, c. 1974' }, { label: 'Studio privato, Torino' }, { label: 'Collezione, Milano' }, { label: 'Returned, 2026' }],
  },
  {
    lot: '0307', type: 'Applique', title: 'Vetro opalino',
    maison: 'STILNOVO', maisonName: 'Stilnovo', city: 'Milano', year: 1965,
    designer: '—', attribution: 'Manifattura', price: 1800,
    shadeTone: '#EBE5D2',
    desc: 'Applique in ottone con diffusore in vetro opalino. Produzione Stilnovo, Milano. Cablatura sostituita; conforme CE.',
    meta: { 'Periodo': '1965', 'Materiali': 'ottone, opalino', 'Dimensioni': 'h 32 · p 18 cm', 'Cablatura': 'sostituita, conforme CE', 'Etichetta': 'parzialmente presente', 'Stato': 'buono' },
    provenance: [{ label: 'Milano, c. 1965' }, { label: '—', unknown: true }, { label: 'Returned, 2026' }],
  },
  {
    lot: '0412', type: 'Sospensione', title: 'Murano, fascia rossa',
    maison: 'VISTOSI', maisonName: 'Vistosi', city: 'Murano', year: 1973,
    designer: 'Alessandro Pianon', attribution: 'Attribuito a', price: 2900,
    shadeTone: '#E5DECC',
    desc: 'Sospensione in vetro soffiato di Murano con fascia rossa. Produzione Vistosi, Murano. Cablatura sostituita; conforme CE.',
    meta: { 'Periodo': '1973', 'Materiali': 'vetro soffiato di Murano', 'Dimensioni': 'h 38 · ø 34 cm', 'Cablatura': 'sostituita, conforme CE', 'Etichetta': 'assente', 'Stato': 'eccellente' },
    provenance: [{ label: 'Murano, c. 1973' }, { label: 'Collezione privata, Venezia' }, { label: 'Returned, 2026' }],
  },
];

export interface Designer {
  name: string;
  years: string;
  city: string;
  maison: string;
  pieces: number;
  bio: string;
}

export const DESIGNERS: Designer[] = [
  { name: 'Gino Sarfatti', years: '1912 — 1985', city: 'Venezia · Milano', maison: 'Arteluce', pieces: 9, bio: 'Founder of Arteluce in 1939; the unrivalled grammar of Italian lighting. His inventory tags every fitting with a number — Modello 1063, Modello 2097 — and rejects the metaphor of the lamp as ornament.' },
  { name: 'Bruno Gatta', years: '1908 — 1976', city: 'Milano', maison: 'Stilnovo', pieces: 7, bio: 'Founded Stilnovo in 1946. The 2128 (1962) is his sartorial answer to Sarfatti — brass collar, marble plinth, opaline diffuser — selected like cloth.' },
  { name: 'Vico Magistretti', years: '1920 — 2006', city: 'Milano', maison: 'O‑Luce · Artemide', pieces: 6, bio: 'Architect-designer; the Eclisse (1965) and the floor lamp Mod. 387 (1974). Light as room-architecture, never gesture.' },
  { name: 'Achille Castiglioni', years: '1918 — 2002', city: 'Milano', maison: 'Flos', pieces: 5, bio: 'With brother Pier Giacomo, the Arco (1962) and the Taccia (1962). Wit and engineering held in the same hand.' },
  { name: 'Tobia Scarpa', years: '1935 — ', city: 'Venezia', maison: 'Flos · Venini', pieces: 3, bio: "Murano blower's son. Author of the Biagio (1968) and the Fantasma (1961). Mass conjugated with light." },
  { name: 'Gae Aulenti', years: '1927 — 2012', city: 'Milano', maison: 'Stilnovo · Martinelli', pieces: 4, bio: 'Architect of museums. Pipistrello (1965) — telescoping piantana, opaline shade, lacquered base — codified an Italian table grammar still in production.' },
  { name: 'Joe Colombo', years: '1930 — 1971', city: 'Milano', maison: 'O‑Luce · Oluce', pieces: 4, bio: 'Designer of Spider (1965) and Coupé (1967). Engineered geometry, brief life, lasting voice.' },
  { name: 'Carlo Nason', years: '1935 — 2020', city: 'Murano', maison: 'Mazzega', pieces: 5, bio: 'Murano vetraio working in incalmo and submerged colour. The Mazzega lineage of the early 1970s.' },
  { name: 'Alessandro Pianon', years: '1931 — 1984', city: 'Venezia · Murano', maison: 'Vistosi', pieces: 3, bio: 'Glass and architecture; the Pulcini series (1962) and a body of pendants for Vistosi.' },
  { name: 'Pier Giacomo Castiglioni', years: '1913 — 1968', city: 'Milano', maison: 'Flos', pieces: 3, bio: 'With his younger brother Achille, the conscience and the joinery of the Castiglioni studio.' },
];

export const MAISONS = [
  { name: 'Stilnovo',         city: 'Milano', dates: '1946 — 1989', count: 12 },
  { name: 'Arteluce',         city: 'Milano', dates: '1939 — 1973', count: 9 },
  { name: 'Arredoluce',       city: 'Monza',  dates: '1943 — 1980', count: 6 },
  { name: 'Flos',             city: 'Brescia',dates: '1962 — present', count: 8 },
  { name: 'O‑Luce',      city: 'Milano', dates: '1945 — present', count: 7 },
  { name: 'Fontana Arte',     city: 'Milano', dates: '1932 — present', count: 5 },
  { name: 'Martinelli Luce',  city: 'Lucca',  dates: '1950 — present', count: 4 },
  { name: 'Mazzega',          city: 'Murano', dates: '1946 — 1992', count: 11 },
  { name: 'Vistosi',          city: 'Murano', dates: '1945 — present', count: 6 },
  { name: 'Sciolari',         city: 'Roma',   dates: '1949 — 1985', count: 4 },
];
