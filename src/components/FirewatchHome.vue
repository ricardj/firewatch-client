<script setup>

import InputSection from "./InputSection.vue";
import OutputSection from "./OutputSection.vue";
</script>

<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col cols="4">
        <v-card class="fill-height" color="surface" elevation="2">
          <v-card-title>Input</v-card-title>
          <InputSection/>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card class="fill-height d-flex flex-column" color="surface" elevation="2">
          <v-card-title>Output</v-card-title>
          <OutputSection/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>

</style>
