<script setup>
import FirewatchHome from './components/FirewatchHome.vue'
</script>

<template>
  <v-app>
    <v-card class="mx-auto w-100">
      <v-layout>
    <v-app-bar   density="compact" color="primary">
      <v-app-bar-title class="font-weight-bold">FIREWATCH</v-app-bar-title>
    </v-app-bar>

    <v-main  style="height: 100dvh; overflow: hidden; width: 100dvw">
      <firewatch-home></firewatch-home>
    </v-main>
      </v-layout>
    </v-card>
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
