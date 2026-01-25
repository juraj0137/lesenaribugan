import { Wrench, Building2, Factory, Flame, Train, PipetteIcon, Warehouse, Home, Building, HardHat, Shield, Truck } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: "montaz",
    title: "Montáž lešení",
    description: "Profesionální montáž průmyslového lešení všech typů a rozměrů pro stavební i průmyslové projekty.",
    icon: "Wrench",
  },
  {
    id: "demontaz",
    title: "Demontáž lešení",
    description: "Bezpečná a rychlá demontáž lešení po ukončení prací s důrazem na bezpečnost.",
    icon: "Building2",
  },
  {
    id: "pronajem",
    title: "Pronájem lešení",
    description: "Pronájem kompletního vybavení včetně lešenářských prvků za výhodné ceny.",
    icon: "Building",
  },
  {
    id: "prumyslove",
    title: "Průmyslové lešení",
    description: "Specializované řešení pro průmyslové podniky - hutě, elektrárny, chemické závody.",
    icon: "Factory",
  },
  {
    id: "teplarne",
    title: "Teplárenské kotle",
    description: "Lešení uvnitř teplárenských a elektrárenských kotlů pro údržbu a opravy.",
    icon: "Flame",
  },
  {
    id: "mosty",
    title: "Potrubní a železniční mosty",
    description: "Montáž lešení na mostech a potrubních konstrukcích pro opravy a údržbu.",
    icon: "Train",
  },
  {
    id: "nadrze",
    title: "Nádrže a výsypky",
    description: "Lešení v nádržích, výsypkách a zásobnících pro průmyslové aplikace.",
    icon: "Warehouse",
  },
  {
    id: "stavebni",
    title: "Stavební projekty",
    description: "Lešení pro rodinné domy, panelové domy a stavební rekonstrukce.",
    icon: "Home",
  },
]

export const scaffoldingTypes = [
  "Rámové lešení ALFIX",
  "Modulové lešení PERI UP",
  "Fasádní lešení",
  "Prostorové lešení",
  "Pojízdné lešení",
  "Zavěšené lešení",
]

export const scaffoldingLocations = [
  "v nádržích",
  "v teplárenských kotlech",
  "v elektrárenských kotlech",
  "ve vysokých pecích",
  "na železničních a potrubních mostech",
  "k potrubím",
  "ve výsypkách surového uhlí",
  "k ocelovým konstrukcím",
  "k těžním věžím",
  "k rodinným domům",
  "k panelákům",
]

export const keyFeatures = [
  {
    title: "Stovky projektů",
    description: "Realizovali jsme stovky projektů pro přední průmyslové podniky v ČR a na Slovensku.",
    icon: "HardHat",
  },
  {
    title: "Certifikace ISO 9001",
    description: "Držitelé certifikátu ČSN EN ISO 9001 garantující kvalitu našich služeb.",
    icon: "Shield",
  },
  {
    title: "Působnost ČR a SK",
    description: "Poskytujeme služby po celé České republice i na Slovensku.",
    icon: "Truck",
  },
]
