<script setup>

import InputSection from "./InputSection.vue";
import OutputSection from "./OutputSection.vue";
</script>

<template>
  <v-container class="fill-height w-100">
    <v-row class="fill-height">
      <v-col cols="4" class="fill-height">
        <v-card class="fill-height" color="surface" elevation="2">
          <v-card-title>Input</v-card-title>
          <InputSection/>
        </v-card>
      </v-col>

      <v-col cols="8" class="fill-height w-100">
        <v-card class="fill-height w-100" color="surface" elevation="2">
          <OutputSection/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>

</style>
