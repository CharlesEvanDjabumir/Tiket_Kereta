<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-orange-5">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          PT.Kereta Lampung
        </q-toolbar-title>

        <!-- <div>Profile</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-orange-2"
    >
      <q-list>
        <q-item-label header>Pilihan Menu</q-item-label>
        <q-item clickable tag="a" target="" href="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Tamapilan Awal</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable tag="a" target="" href="#">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile</q-item-label>
            <q-item-label caption>Akun</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item clickable tag="a" target="" href="Tiketkereta">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tiket Kereta</q-item-label>
            <q-item-label caption>Input,update,delate</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="" href="Booking">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Booking Tiket</q-item-label>
            <q-item-label caption>Pemesanan Tiket</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable tag="a" target="" href="#">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Laporan</q-item-label>
            <q-item-label caption>Laporan Transaksi</q-item-label>
          </q-item-section>
        </q-item> -->
        <!-- <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item clickable tag="a" target="" href="Login">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Log Out</q-item-label>
            <q-item-label caption>Keluar</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>m

    <q-page-container class="bg-orange-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
