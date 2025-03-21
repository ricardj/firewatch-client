<script setup>

import InputSection from "./InputSection.vue";
import OutputSection from "./OutputSection.vue";
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-card class="pa-4" color="surface" elevation="2">
          <InputSection/>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card class="pa-4" color="surface" elevation="2">
          <OutputSection/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>

</style>
