<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";

const props = defineProps({ taskService: Object });

const logContent = ref("---LOG INIT---\n");
const outputImage = ref("https://mfiles.alphacoders.com/100/1008007.png");

function getTaskStatus(): TaskStatusResponse {
  return props.taskService.taskStatus;
}

watch(
  getTaskStatus(),
  (newStatus: TaskStatusResponse, oldStatus: TaskStatusResponse) => {
    console.log("Detected change on status task");
    updateOutput(newStatus.currentImage, newStatus.logs);
  },
);

// Update them anytime
function updateOutput(image, log) {
  logContent.value += log + "\n";
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
      <v-card-text style="font-family: monospace; white-space: pre-line"
        >{{ logContent }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
