<script setup lang="ts">
import { LoggerService } from "@/services/LoggerService";

const text = LoggerService.get().snackbarMessage;
const snackbar = LoggerService.get().isSnackbarOn;
</script>

<template>
  <v-snackbar v-model="snackbar" location="top end" timeout="3000">
    {{ text }}
  </v-snackbar>
</template>

<style scoped></style>
