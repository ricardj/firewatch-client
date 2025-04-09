<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
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
  updateImage(image);
}

function updateImage(image: any) {
  if (image === "") return;
  outputImage.value = image;
}

function updateLog(log) {
  if (log === "") return;
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

    <v-card
      class="flex-grow-1 fill-height"
      color="surface"
      elevation="2"
      style="width: 50%"
    >
      <v-card-title>Logs</v-card-title>
      <v-card-text
        style="
          height: 100%;
          width: 100%;
          font-family: monospace;
          white-space: pre-wrap;
        "
      >
        <div
          ref="logContainer"
          class="overflow-auto"
          style="
            height: 90%;
            overflow-x: auto;
            width: 100%;
            white-space: pre-wrap;
            display: block;
          "
        >
          <pre
            v-html="logContent"
            style="margin: 0; white-space: pre; min-width: max-content"
          ></pre>
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
