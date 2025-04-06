<script setup>
import FileUpload from "@components/utilities/FileUpload.vue";
import { ref } from "vue";
import { Ref } from "vue";

// Accept the ref as a prop
defineProps({ taskService });

const fileUploadComponent = ref();

function uploadFile() {
  fileUploadComponent.value.fileUpload.tryUploadFile();
}

function startSimulation() {
  //Check first if the file is uploaded.
  console.log("Trying to start simulation...");
  taskService.value.startTask(
    fileUploadComponent.value.fileUpload.uploadURLResponse.value,
  );
}

function stopSimulation() {
  alert("Stopping simulation...");
}

defineExpose({
  fileUploadComponent,
});
</script>

<template>
  <v-container
    class="fill-height w-100 d-flex flex-column align-stretch"
    style="gap: 10px"
  >
    <FileUpload ref="fileUploadComponent"></FileUpload>
    <v-btn color="primary" @click="uploadFile"> Upload file </v-btn>
    <v-btn color="primary" @click="startSimulation"> Start simulation </v-btn>
    <v-btn color="primary" @click="stopSimulation"> Stop simulation </v-btn>
  </v-container>
</template>
