<script setup>
import {useFileUpload} from "@/composables/useFileUpload.js";

const { uploadedFile } = useFileUpload()
</script>

<template>
  <v-file-upload
      v-model="uploadedFile"
      density="compact"
      :multiple="false"
  >
  </v-file-upload>
</template>



