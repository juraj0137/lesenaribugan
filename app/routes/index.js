var express = require('express');
var router = express.Router(); var argv = require('minimist')(process.argv.slice(2));
var renderToFile = !!argv.build;

const referencie = {
  "okd_dul_darkov_02.jpg": "OKD Důl Darkov",
  "homole.jpg": "Vodní nádrž Homole",
  "us_steel_kosice_03.jpg": "US Steel Košice",
  "trinecke_zelezarny_01.jpg": "Třinecké železárny",
  "biocel_paskov_01.jpg": "Biocel Paskov a.s.",
  "arcelor_mittal_01.jpg": "ArcelorMittal Ostrava a.s.",
  "cez_01.jpg": "ČEZ, a.s.",
  "bonatrans_01.jpg": "Bonatrans Bohumín",
  "borsodchem_01.jpg": "BorsodChem MCHZ, s.r.o.",
  "tatra_koprivnice_01.jpg": "Tatra Kopřivnice",
}

const sluzby = {
  "biocel_paskov_01.jpg": "Biocel Paskov a.s.",
  "tatra_koprivnice_01.jpg": "Tatra Kopřivnice",
  "borsodchem_01.jpg": "BorsodChem MCHZ, s.r.o.",
  "bonatrans_01.jpg": "Bonatrans Bohumín",
  "cez_01.jpg": "ČEZ, a.s.",
  "arcelor_mittal_01.jpg": "ArcelorMittal Ostrava a.s.",
  "trinecke_zelezarny_01.jpg": "Třinecké železárny",
  "us_steel_kosice_03.jpg": "US Steel Košice",
  "okd_dul_darkov_02.jpg": "OKD Důl Darkov",
}

const mapping = {
  '/': {
    view: 'index',
    data: { referencie, sluzby }
  },
  '/ofirme.html': {
    view: 'o_firme'
  },
  '/sluzby.html': {
    view: 'sluzby'
  },
  '/referencie.html': {
    view: 'referencie',
    data: { referencie }
  },
}

Object.keys(mapping).forEach(path => {
  router.get(path, function (req, res, next) {
    res.render(mapping[path].view, { ...mapping[path].data });
  });
})

module.exports = router;
