const mongoose = require('mongoose')
const schema = mongoose.Schema

const booking = new schema({
  kodebooking: {
    type: String,
  },
  kotaasal: {
    type: String
  },
  kotatujuan: {
    type: String
  },
  tanggalberangkat: {
    type: String
  },
  namastasiun: {
    type: String
  },
  jadwalkeberangkatan: {
    type: String
  },
  jadwaltiba: {
    type: String
  },
  kelaspenumpang: {
    type: String
  },
  keretaapi: {
    type: String
  },
  hargatiket: {
    type: Number
  },
  nik: {
    type: String
  },
  namalengkap: {
    type: String
  },
  notlp: {
    type: String
  }
})

module.exports = mongoose.model('booking', booking)