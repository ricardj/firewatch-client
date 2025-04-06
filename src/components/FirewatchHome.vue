<script setup>
import InputSection from "./InputSection.vue";
import OutputSection from "./OutputSection.vue";
import ResponsiveCardContent from "./utilities/ResponsiveCardContent.vue";

import { useTaskService } from "@/composables/useTaskService.js";
const taskService = useTaskService();
</script>

<template>
  <v-container class="fill-height w-100">
    <v-row class="fill-height w-100">
      <v-col cols="4" class="fill-height">
        <v-card
          class="w-100"
          prepend-icon="mdi-cloud-upload"
          subtitle="Upload an APK"
          color="surface"
          elevation="2"
          style="height: auto"
        >
          <template v-slot:title>
            <span class="font-weight-black">Input</span>
          </template>
          <v-card-text class="fill-height w-100 bg-surface-light pt-4">
            <ResponsiveCardContent>
              <InputSection :taskService="taskService" />
            </ResponsiveCardContent>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="8" class="fill-height w-100">
        <v-card
          class="fill-height w-100"
          prepend-icon="mdi-blur"
          subtitle="Check the process unfold"
          color="surface"
          elevation="2"
        >
          <template v-slot:title>
            <span class="font-weight-black">Output</span>
          </template>
          <v-card-text class="fill-height bg-surface-light pt-4">
            <ResponsiveCardContent>
              <OutputSection :taskService="taskService" />
            </ResponsiveCardContent>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
