<script setup lang="ts">
import { nextTick, ref } from "vue";
import { watch } from "vue";
import { TaskStatusResponse } from "@/models/TaskStatusResponse";
import { LoggerService } from "@/services/LoggerService";

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

watch(LoggerService.get().log, (newValue, oldValue) => {
  updateLog(newValue);
});

// Update them anytime
function updateOutput(image, log) {
  updateLog(log);
  outputImage.value = image;
}

function updateLog(log) {
  logContent.value += log + "\n";
}

const loading = LoggerService.get().isLoading;

const logContainer = ref<HTMLElement | null>(null);
watch(logContent, async () => {
  await nextTick(); // Wait for DOM update
  if (logContainer.value) {
    logContainer.value.scrollTop = logContainer.value.scrollHeight;
  }
});
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
      <v-card-text
        style="height: 100%; font-family: monospace; white-space: pre-line"
      >
        <div ref="logContainer" class="overflow-auto" style="height: 90%">
          {{ logContent }}
          <v-fade-transition leave-absolute>
            <v-progress-circular
              v-if="loading"
              color="info"
              size="24"
              indeterminate
            ></v-progress-circular>
          </v-fade-transition>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
