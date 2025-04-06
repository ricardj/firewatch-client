<script setup lang="ts">
import { ref } from "vue";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";

defineProps({ taskService });

const logContent = ref("...");
const outputImage = ref("https://mfiles.alphacoders.com/100/1008007.png");

watch(
  taskService.value.taskPoller.taskStatus,
  (pre, newStatus: TaskStatusResponse) => {
    updateOutput(newStatus.currentImage, newStatus.logs);
  },
);

// Update them anytime
function updateOutput(image, log) {
  logContent.value = log;
  outputImage.value = image;
}
</script>

<template>
  <v-container class="fill-height d-flex flex-row align-start" style="gap: 5%">
    <v-card class="fill-height" style="width: 40%">
      <v-img
        class="fill-height"
        style="width: auto"
        :src="outputImage"
        cover
      ></v-img>
    </v-card>

    <v-card class="flex-grow-1 fill-height" color="surface" elevation="2">
      <v-card-title>Logs</v-card-title>
      <v-card-text>{{ logContent }} </v-card-text>
    </v-card>
  </v-container>
</template>
