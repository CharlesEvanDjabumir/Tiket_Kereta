const booking = require('../model/booking')
const mongoose = require('mongoose')

exports.simpandatabooking = (kdbooking, ktasal, kttujuan, nmstasiun, tglbrngkat, jdwlkeberangkatan, jdwltiba,klspenumpang,krtapi,hrgtiket,nikktp,namalngkp,nope) =>
new Promise((resolve, reject) => {
  let databk = new booking({
    kodebooking: kdbooking,
    kotaasal: ktasal,
    kotatujuan: kttujuan,
    tanggalberangkat: tglbrngkat,
    namastasiun: nmstasiun,
    jadwalkeberangkatan: jdwlkeberangkatan,
    jadwaltiba: jdwltiba,
    kelaspenumpang: klspenumpang,
    keretaapi: krtapi,
    hargatiket: hrgtiket,
    nik: nikktp,
    namalengkap:namalngkp ,
    notlp: nope 
  });
  booking.create(databk)
  .then(res => {
    resolve ({error: false,
    pesan: 'Data Terimput'})
  })
  .catch(res => {
    reject({
      error: true,
      pesan: 'Gagal Terimput'
    })
  })
})

exports.simpanbookingbaru = (data) =>
new Promise((resolve, reject) => {
  booking.create(data)
  .then(res => {
    resolve ({error: false,
    pesan: 'Berhasil Pesan'})
  })
  .catch(res => {
    reject({
      error: true,
      pesan: 'Gagal Pesan'
    })
  })
})

exports.getbooking = () =>
new Promise((resolve, reject) => {
  booking.find()
  .then(res => {
    resolve ({error:false, pesan: 'Data Berhasil diambil', data: res})
  })
  .catch(res => {
    console.log(error)
    reject ({error:true, pesan: 'Data Tidak diambil'})
  })
})

exports.deletebooking = (id) =>
new Promise((resolve, reject) => {
  booking.deleteOne({
    _id: Object(id)
  }).then(res =>{
    resolve ({
      error:false, 
      pesan: 'data berhasil dihapus'
    })
  })
  .catch (error => {
    console.log(error)
    reject({
      error:true, 
      pesan: 'data tidak terhapus'
    })
  })
})