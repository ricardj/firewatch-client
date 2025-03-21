<script setup>

</script>

<template>
  <h3 class="mb-2">Input</h3>

  <v-file-input
      label="Upload App"
      prepend-icon="mdi-upload"
      show-size
      v-model="file"
  />

  <v-btn color="primary" @click="handleClick">
    Process app
  </v-btn>
</template>

<style scoped>

</style>