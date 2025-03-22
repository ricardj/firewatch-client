<script setup>

</script>

<template>
  <h3 class="mb-2">Output</h3>
    <v-container fluid>
      <v-row>
        <!-- Image Section -->
        <v-col cols="6">
          <v-card  class="mx-auto" max-width="400" elevation="4">
            <v-responsive :aspect-ratio="768 / 1579">
            <v-img
                src="https://mfiles.alphacoders.com/100/1008007.png"
                height="100%"
                cover
                eager
            ></v-img>
            </v-responsive>
          </v-card>
        </v-col>

        <!-- Logs Section -->
        <v-col cols="6">
          <v-card class="pa-0" color="surface" elevation="2">
            <h3 class="mb-3">Logs</h3>
            <div class="log-box">
              <div
                  v-for="(log, index) in logs"
                  :key="index"
                  class="log-line"
              >
                {{ log }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script setup>
    import { ref } from 'vue'

    const logs = ref([
      'App started',
      'User uploaded a file',
      'Image processed successfully',
    ])
  </script>





<style scoped>
.log-box {
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 8px;
}

.log-line {
  margin-bottom: 0.5rem;
  font-family: monospace;
}
</style>