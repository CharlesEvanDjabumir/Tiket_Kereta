<template>
  <q-page class="items-center">
    <div class="q-mb-xl" style="width: 100%; height: 600px;">
      <div class="text-center">
      <h3>Penjualan Tiket Kereta</h3>
      </div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      style="height: 700px;"
    >
      <q-carousel-slide :name="1" img-src="../assets/1.jpg" />
      <q-carousel-slide :name="2" img-src="../assets/4.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/5.jpg" />
      <q-carousel-slide :name="4" img-src="../assets/6.jpg" />
      <q-carousel-slide :name="5" img-src="../assets/7.jpg" />
      <q-carousel-slide :name="6" img-src="../assets/8.jpg" />
      <q-carousel-slide :name="7" img-src="../assets/11.jpg" />
      <q-carousel-slide :name="8" img-src="../assets/14.jpg" />
      <q-carousel-slide :name="9" img-src="../assets/15.jpg" />
      <q-carousel-slide :name="10" img-src="../assets/17.jpg" />
      <q-carousel-slide :name="11" img-src="../assets/18.jpg" />
      <q-carousel-slide :name="12" img-src="../assets/12.jpg" />
    </q-carousel>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
