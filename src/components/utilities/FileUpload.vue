<script setup>
import {useFileUpload} from "@/composables/useFileUpload.ts";

const fileUpload = useFileUpload()
const {fileToUpload} = fileUpload;

function tryUploadFile() {
  fileUpload.tryUploadFile()
}

defineExpose({
  tryUploadFile,fileUpload
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



