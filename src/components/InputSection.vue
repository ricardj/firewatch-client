<script setup>
import FileUpload from "./utilities/FileUpload.vue";
import {getUploadURL} from "@/composables/useGatewayService.js";
import {useFileUpload} from "@/composables/useFileUpload.js";

function start_simulation() {

  //Check first if the file is uploaded.
  alert(useFileUpload().uploadedFile.value.name)

  return;

  getUploadURL().then((upload_url) => {
    alert(upload_url)
  })

}

</script>

<template>

  <v-container
      class="fill-height w-100 d-flex flex-column align-stretch"
      style="gap: 10px">
    <FileUpload></FileUpload>

    <v-btn color="primary" @click="start_simulation">
      Start simulation
    </v-btn>
    <v-btn color="primary" @click="start_simulation">
      Stop simulation
    </v-btn>
  </v-container>


</template>