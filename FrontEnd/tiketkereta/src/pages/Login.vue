<template>
  <q-page>
    <div>

      <div  class="flex inline shadow-box flex-center" v-for="n in 1" :key="n" :class="`shadow-${11}`">
      <div class="row col-md-6 col-xl-12" style="height: 340px;width: 850px">
        <img src="../assets/Logo.png" alt="" srcset="" width="50%">
        <q-card flat class="col-md-4 q-card--flat no-shadow" style="width: 424px">
      <q-card-section>
        <div class="text-h4 text-blue-grey-14 q-pb-xl">
          <b>LOGIN</b>
        </div>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <q-input
        filled
        type="String"
        v-model="username"
        label="Masukan Username *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your Username']"
      />

      <q-input
        filled
        type="Password"
        v-model="password"
        label="Masukan Password *"
        lazy-rules
        :rules="[ val => val !== '' && val !== null || 'Please type Your password']"
      />

      <!-- <q-toggle v-model="setuju" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
      <!-- <p><b>Tidak punya Akun? </b><q-btn flat style="color: #000000" label="Klik Disini" to="/register"/></p> -->
    </q-form>
      </q-card-section>
    </q-card>
      </div>
    </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      setuju: false
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('admin/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.error) {
          this.showNotif(res.data.pesan, 'negative')
        } else {
          this.$router.push('/')
        }
        this.onReset()
      })
    },
    onReset () {
      this.username = ''
      this.password = ''
      this.setuju = false
    },
    showNotif (msg, color) {
      this.$q.notify({
        message: msg,
        color: color
      })
    }
  }
}
</script>
