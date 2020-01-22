<template>
  <q-layout>
    <q-page-container class="bg-orange-3">
      <div class="tengah">
            <router-view/>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
  .tengah {
    padding-top: 16%;
    padding-left: 30%
  }
</style>
