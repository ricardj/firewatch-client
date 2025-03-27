<script setup>
import {useFileUpload} from "@/composables/useFileUpload.js";

const fileUpload = useFileUpload()
const {fileToUpload} = fileUpload;

function tryUploadFile() {
  fileUpload.tryUploadFile()
}

defineExpose({
  tryUploadFile
})

</script>

<template>
  <v-file-upload
      v-model="fileToUpload"
      density="compact"
      :multiple="false"
  >
  </v-file-upload>
</template>



