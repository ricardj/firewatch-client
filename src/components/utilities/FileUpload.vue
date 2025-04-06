<script setup>
import { useFileUpload } from "@/composables/useFileUpload.ts";
import { ref } from "vue";

const fileUpload = useFileUpload();
const { fileToUpload } = fileUpload;

const loading = ref(true);

defineExpose({
  fileUpload,
});
</script>

<template>
  <v-file-upload v-model="fileToUpload" density="compact" :multiple="false">
  </v-file-upload>
</template>
