<script setup>

</script>

<template>
  <h3 class="mb-2">Output</h3>
    <v-container fluid>
      <v-row>
        <!-- Image Section -->
        <v-col cols="6">
          <v-card class="pa-4" color="surface" elevation="2">
            <h3 class="mb-3">Uploaded Images</h3>
            <v-row dense>
              <v-col
                  v-for="(img, index) in images"
                  :key="index"
                  cols="12"
                  class="mb-3"
              >
                <v-img
                    :src="img"
                    aspect-ratio="3/4"
                    cover
                    class="rounded"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- Logs Section -->
        <v-col cols="6">
          <v-card class="pa-4" color="surface" elevation="2">
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

    const images = ref([
      'https://via.placeholder.com/150x200',
      'https://via.placeholder.com/150x200',
      'https://via.placeholder.com/150x200',
    ])

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
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
}

.log-line {
  margin-bottom: 0.5rem;
  font-family: monospace;
  color: #ccc;
}
</style>