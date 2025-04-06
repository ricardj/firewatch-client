<script setup>
import FileUpload from "./utilities/FileUpload.vue";
import {useTaskService} from "@/composables/useTaskService.ts";
import {ref} from "vue";
import fileUpload from "@/components/utilities/FileUpload.vue";

const fileUploadComponent = ref()

function uploadFile() {
  fileUploadComponent.value.tryUploadFile();
}

function startSimulation() {
  //Check first if the file is uploaded.
  console.log("Trying to start simulation...");
  useTaskService().startTask(fileUploadComponent.value.uploadURLResponse);

}

function stopSimulation() {
  alert("Stopping simulation...");
}


defineExpose({
  fileUploadComponent
})


</script>

<template>

  <v-container
      class="fill-height w-100 d-flex flex-column align-stretch"
      style="gap: 10px">
    <FileUpload ref="fileUploadComponent"></FileUpload>
    <v-btn color="primary" @click="uploadFile">
      Upload file
    </v-btn>
    <v-btn color="primary" @click="startSimulation">
      Start simulation
    </v-btn>
    <v-btn color="primary" @click="stopSimulation">
      Stop simulation
    </v-btn>
  </v-container>


</template>