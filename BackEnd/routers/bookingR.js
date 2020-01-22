const booking = require('express')()

const bookingcont = require('../controller/bookingC')

booking.post('/simpanbk', (req, res) => {

  bookingcont.simpandatabooking(req.body.kodebooking,req.body.kotaasal,req.body.kotatujuan,req.body.tanggalberangkat,req.body.namastasiun,req.body.jadwalkeberangkatan,req.body.jadwaltiba,req.body.kelaspenumpang,req.body.keretaapi,req.body.hargatiket,req.body.nik,req.body.namalengkap,req.body.notlp)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

booking.post('/simpanbaru', (req, res) => {
  bookingcont.simpanbookingbaru(req.body)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})


booking.get('/getbk', (req, res) => {
  bookingcont.getbooking()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

booking.delete('/delete/:id', (req, res) => {
  bookingcont.deletebooking(req.params.id)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

module.exports = booking