<script setup>
import FirewatchHome from './components/FirewatchHome.vue'
</script>

<template>
  <v-app>

    <v-app-bar color="primary" dark flat app height="20dvh">
      <v-app-bar-title class="font-weight-bold">FIREWATCH</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <firewatch-home></firewatch-home>
    </v-main>
  </v-app>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* optional, if you want no scroll at all */
}
</style>
