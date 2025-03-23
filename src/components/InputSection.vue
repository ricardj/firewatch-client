<script setup>

</script>

<template>

  <v-container class="d-flex flex-column align-stretch">
    <v-file-input
        label="Upload App"
        prepend-icon="mdi-upload"
        show-size
        v-model="file"
    />
    <v-btn color="primary" @click="handleClick">
      Process app
    </v-btn>
  </v-container>
</template>

<style scoped>

</style>