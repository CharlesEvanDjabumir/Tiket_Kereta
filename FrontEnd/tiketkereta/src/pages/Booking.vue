<template>
  <q-page padding>
    <q-card>
      <div class="q-pa-md">
    <q-table
      title="Data Booking Tiket"
      :data="data"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      :loading="loading"
      :filter="filter"
      @request="onRequest"
      binary-state-sort
    >
      <template v-slot:top-right>
      </template>
      <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodebooking" :props="props">{{ props.row.kodebooking }}</q-td>
            <q-td key="kotaasal" :props="props">{{ props.row.kotaasal }}</q-td>
            <q-td key="kotatujuan" :props="props">{{ props.row.kotatujuan }}</q-td>
            <q-td key="tanggalberangkat" :props="props">{{ props.row.tanggalberangkat }}</q-td>
            <q-td key="namastasiun" :props="props">{{ props.row.namastasiun }}</q-td>
            <q-td key="jadwalkeberangkatan" :props="props">{{ props.row.jadwalkeberangkatan }}</q-td>
            <q-td key="jadwaltiba" :props="props">{{ props.row.jadwaltiba }}</q-td>
            <q-td key="kelaspenumpang" :props="props">{{ props.row.kelaspenumpang }}</q-td>
            <q-td key="keretaapi" :props="props">{{ props.row.keretaapi }}</q-td>
            <q-td key="hargatiket" :props="props">{{ props.row.hargatiket }}</q-td>
            <q-td key="nik" :props="props">{{ props.row.nik }}</q-td>
            <q-td key="namalengkap" :props="props">{{ props.row.namalengkap }}</q-td>
            <q-td key="notlp" :props="props">{{ props.row.notlp }}</q-td>
            <q-td key="aksi" :props="props">
              <q-card-actions align="around" class="row q-col-gutter-md no-wrap">
                <div class="col q-gutter-md">
                  <q-btn round @click="confirm(props.row._id)" color="negative" icon="delete"></q-btn>
                </div>
              </q-card-actions>
            </q-td>
          </q-tr>
        </template>

    </q-table>
  </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      filter: '',
      loading: false,
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 30
      },
      columns: [
        {
          name: 'kodebooking',
          required: true,
          label: 'Kode booking',
          align: 'left',
          field: 'kodebooking',
          format: val => `${val}`,
          sortable: true
        },
        { name: 'kotaasal', align: 'center', label: 'Kota Asal', field: 'kotaasal', sortable: true },
        { name: 'kotatujuan', label: 'Kota Tujuan', field: 'kotatujuan', sortable: true },
        { name: 'tanggalberangkat', label: 'Tanggal Berangkat', field: 'tanggalberangkat', sortable: true },
        { name: 'namastasiun', label: 'Nama Stasiun', field: 'namastasiun', sortable: true },
        { name: 'jadwalkeberangkatan', label: 'Jadwal Keberangkatan', field: 'jadwalkeberangkatan', sortable: true },
        { name: 'jadwaltiba', label: 'Jadwal Tiba', field: 'jadwaltiba', sortable: true },
        { name: 'kelaspenumpang', label: 'Kelas', field: 'Kelaspenumpang', sortable: true },
        { name: 'keretaapi', label: 'Kereta Api', field: 'keretaapi', sortable: true },
        { name: 'hargatiket', label: 'Harga Tiket', field: 'hargatiket', sortable: true },
        { name: 'nik', label: 'NIK', field: 'nik', sortable: true },
        { name: 'namalengkap', label: 'Nama Lengkap', field: 'namalengkap', sortable: true },
        { name: 'notlp', label: 'No Telepon', field: 'notlp', sortable: true },
        { name: 'aksi', lebel: 'Aksi', field: 'aksi' }
      ],
      data: [],
      original: [],
      openedit: false,
      openinput: false,
      activedata: null,
      kodebooking: '',
      kotaasal: '',
      kotatujuan: '',
      tanggalberangkat: '',
      namastasiun: '',
      jadwalkeberangkatan: '',
      jadwaltiba: '',
      kelaspenumpang: '',
      keretaapi: '',
      hargatiket: '',
      nik: '',
      namalengkap: '',
      notlp: ''
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    getData () {
      this.$axios.get('booking/getbk')
        .then(res => {
          console.log(res)
          this.original = res.data.data
        })
    },
    onRequest (props) {
      let { page, rowsPerPage, rowsNumber, sortBy, descending } = props.pagination
      let filter = props.filter

      this.loading = true

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        this.pagination.rowsNumber = this.getRowsNumberCount(filter)

        // get all rows if "All" (0) is selected
        let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage

        // calculate starting row of data
        let startRow = (page - 1) * rowsPerPage

        // fetch data from "server"
        let returnedData = this.fetchFromServer(startRow, fetchCount, filter, sortBy, descending)

        // clear out existing data and add new
        this.data.splice(0, this.data.length, ...returnedData)

        // don't forget to update local pagination object
        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

        // ...and turn of loading indicator
        this.loading = false
      }, 1500)
    },
    fetchFromServer (startRow, count, filter, sortBy, descending) {
      let data = []

      if (!filter) {
        data = this.original.slice(startRow, startRow + count)
      } else {
        let found = 0
        for (let index = startRow, items = 0; index < this.original.length && items < count; ++index) {
          let row = this.original[index]
          // match filter?
          if (!row['name'].includes(filter)) {
            // get a different row, until one is found
            continue
          }
          ++found
          if (found >= startRow) {
            data.push(row)
            ++items
          }
        }
      }

      // handle sortBy
      if (sortBy) {
        data.sort((a, b) => {
          let x = descending ? b : a
          let y = descending ? a : b
          if (sortBy === 'desc') {
            // string sort
            return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0
          } else {
            // numeric sort
            return parseFloat(x[sortBy]) - parseFloat(y[sortBy])
          }
        })
      }

      return data
    },
    getRowsNumberCount (filter) {
      if (!filter) {
        return this.original.length
      }
      let count = 0
      this.original.forEach((treat) => {
        if (treat['name'].includes(filter)) {
          ++count
        }
      })
      return count
    },
    openDialog (data) {
      this.openedit = true
      this.activedata = data
    },
    edit () {
      this.$axios.put('/daftartiket/update/' + this.activedata._id, this.activedata)
        .then(res => {
          if (res.data.error) {
            this.showNotif(res.data.pesan, 'negative')
          } else {
            this.showNotif(res.data.pesan, 'positive')
            this.openedit = false
            this.getData()
          }
        })
    },
    showNotif (msg, color) {
      this.$q.notify({
        message: msg,
        color: color
      })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'apakah anda yakin',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete('booking/delete/' + id)
          .then(res => {
            if (res.data.error) {
              this.showNotif(res.data.pesan, 'negative')
            } else {
              this.showNotif(res.data.pesan, 'positive')
              this.getData()
            }
          })
      })
    },
    input () {
      this.openinput = true
    },
    inputmk () {
      this.$axios.post('/daftartiket/insert', {
        kodebooking: this.kodebooking,
        kotaasal: this.kotaasal,
        kotatujuan: this.kotatujuan,
        namastasiun: this.namastasiun,
        jadwalkeberangkatan: this.jadwalkeberangkatan,
        jadwaltiba: this.jadwaltiba,
        kelaspenumpang: this.kelaspenumpang,
        keretaapi: this.keretaapi
      })
        .then(res => {
          if (res.data.error) {
            this.showNotif(res.data.pesan, 'negative')
          } else {
            this.showNotif(res.data.pesan, 'positive')
            this.getData()
          }
        })
      this.reset()
    },
    reset () {
      this.kodebooking = ''
      this.kotaasal = ''
      this.kotatujuan = ''
      this.namastasiun = ''
      this.jadwalkeberangkatan = ''
      this.jadwaltiba = ''
      this.kelaspenumpang = ''
      this.keretaapi = ''
    }
  }
}
</script>
