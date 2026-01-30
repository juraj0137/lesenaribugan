export interface Reference {
  id: string
  name: string
  image: string
  category?: string
}

export const references: Reference[] = [
  {
    id: "oc-karlak",
    name: "OC KARLÁK",
    image: "/images/referencie/oc-karlak.jpg",
    category: "Stavebnictví",
  },
  {
    id: "milotice-most",
    name: "Most Milotice nad Opavou - Brantice",
    image: "/images/referencie/milotice.jpg",
    category: "Dopravní stavby",
  },
  {
    id: "liberty",
    name: "Areál LIBERTY a.s.",
    image: "/images/referencie/liberty.jpg",
    category: "Hutnictví",
  },
  {
    id: "paskov-kotel",
    name: "Biocel Paskov",
    image: "/images/referencie/paskov-kotel.jpg",
    category: "Chemický průmysl",
  },
  {
    id: "okd-darkov",
    name: "OKD Důl Darkov",
    image: "/images/referencie/okd_dul_darkov_02.jpg",
    category: "Těžební průmysl",
  },
  {
    id: "homole",
    name: "Vodní nádrž Homole",
    image: "/images/referencie/homole.jpg",
    category: "Energetika",
  },
  {
    id: "us-steel",
    name: "US Steel Košice",
    image: "/images/referencie/us_steel_kosice_03.jpg",
    category: "Hutnictví",
  },
  {
    id: "trinec",
    name: "Třinecké železárny",
    image: "/images/referencie/trinecke_zelezarny_01.jpg",
    category: "Hutnictví",
  },
  {
    id: "biocel",
    name: "Biocel Paskov a.s.",
    image: "/images/referencie/biocel_paskov_01.jpg",
    category: "Chemický průmysl",
  },
  {
    id: "arcelor",
    name: "ArcelorMittal Ostrava a.s.",
    image: "/images/referencie/arcelor_mittal_01.jpg",
    category: "Hutnictví",
  },
  {
    id: "cez",
    name: "ČEZ, a.s.",
    image: "/images/referencie/cez_01.jpg",
    category: "Energetika",
  },
  {
    id: "bonatrans",
    name: "Bonatrans Bohumín",
    image: "/images/referencie/bonatrans_01.jpg",
    category: "Strojírenství",
  },
  {
    id: "borsodchem",
    name: "BorsodChem MCHZ, s.r.o.",
    image: "/images/referencie/borsodchem_01.jpg",
    category: "Chemický průmysl",
  },
  {
    id: "tatra",
    name: "Tatra Kopřivnice",
    image: "/images/referencie/tatra_koprivnice_01.jpg",
    category: "Strojírenství",
  },
]

export interface Project {
  description: string
  location: string
}

export const projects: Project[] = [
  { description: "Lešení u západní stěny", location: "Areál LIBERTY a.s., Ostrava" },
  { description: "Lešení v regeneračním kotli", location: "Biocel Paskov, Paskov" },
  { description: "Lešení – úpravna zásobníku na asfalt", location: "Obalovna Holubice u Brna" },
  { description: "Lešení na akci Oprava akumulační nádrže HOMOLE, oprava mostovky", location: "Štěchovice u Prahy" },
  { description: "Lešení na akci Oprava turbodmychadla TD1, TD2", location: "ArcelorMittal, Ostrava" },
  { description: "Lešení pro úpravy potrubních tras na turbíně", location: "Areál Tatra Kopřivnice" },
  { description: "Lešení na akci Stavba věže Zámku a ke komínu", location: "Stará Ves nad Ondřejnicí" },
  { description: "Lešení na akcích Zaizolování nádrží, Výměna střech nádrží B003 a B005 a další", location: "Biocel Paskov" },
  { description: "Lešení na akci ČEZ Energetické dílny", location: "Ostrava Vítkovice" },
  { description: "Lešení pro izolaci VZT potrubí na akci MAXION – WHEELS – hala ALU 1", location: "ArcelorMittal, Ostrava" },
  { description: "Lešení na akci Nosná konstrukce pro trysku vodní stěny na řece Ostravici", location: "Ostrava" },
  { description: "Lešenářské práce", location: "Cukrovar Opava" },
  { description: "Lešenářské práce – mosty E, K, J (mezi sloupy)", location: "BorsodChem – MCHZ, Ostrava" },
  { description: "Lešení na akci Oprava střechy, skladu LAN", location: "ŽDB Drátovna a.s." },
  { description: "Lešenářské práce", location: "MVE Štvanice Praha" },
  { description: "Montáž lešení a demoliční práce na akci Chladící věž AL Invest", location: "Břidličná" },
  { description: "Montáž lešení na akci Jeřábová dráha", location: "Bonatrans Bohumín" },
  { description: "Montáž lešení k výměně plynového potrubí", location: "Ostrava - Radvanice" },
  { description: "Lešení ve spalovací komoře kotle K9, K10", location: "Energocentrum Vítkovice" },
  { description: "Lešení na akci REKO MS – přechod přes řeku Ostravici", location: "Frýdek - Místek" },
  { description: "Lešení u Energomostu E2", location: "Třinecké železárny" },
  { description: "Lešení u ZŠ Generála Janka", location: "Ostrava - Mariánské Hory" },
  { description: "Lešenářské a jiné práce", location: "Důl ČSM, Důl ČSA, Důl Darkov" },
  { description: "Montáž lešení k výměně kaloriféru - SONK", location: "Areál Viadrus" },
  { description: "Lešenářské práce", location: "Bekaert Petrovice" },
  { description: "Lešení na přestavbě OC KARLÁK", location: "Karlovo náměstí, Praha" },
  { description: "Lešení na mostě pro akci Rekonstrukce trati Milotice nad Opavou - Brantice", location: "Bruntálsko" },
]
