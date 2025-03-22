<script setup>

import InputSection from "./InputSection.vue";
import OutputSection from "./OutputSection.vue";
</script>

<template>
  <v-spacer height="5dvh"></v-spacer>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col cols="4">
        <v-card class="fill-height" color="surface" elevation="2">
          <InputSection/>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card class="d-flex flex-column"
                height="85dvh"
                max-height="85dvh" color="surface" elevation="2">
          <OutputSection/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>

</style>
