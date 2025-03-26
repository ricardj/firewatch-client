<script setup>
import FileUpload from "./utilities/FileUpload.vue";
import {useGatewayService} from "@/composables/useGatewayService.js";
import {useFileUpload} from "@/composables/useFileUpload.js";
import {useSimulationService} from "@/composables/useSimulationService.js";

function uploadFile() {
  useFileUpload().tryUploadFile();
}

function startSimulation() {
  //Check first if the file is uploaded.
  useSimulationService().startSimulation();

}

function stopSimulation() {
  alert("Stopping simulation...");
}

</script>

<template>

  <v-container
      class="fill-height w-100 d-flex flex-column align-stretch"
      style="gap: 10px">
    <FileUpload></FileUpload>
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