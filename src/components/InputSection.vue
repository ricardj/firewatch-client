<script setup>
import FileUpload from "./utilities/FileUpload.vue";

function handleClick()
{
  alert("Welcome to Firewatch");
}

</script>

<template>

    <v-container
        class="fill-height w-100 d-flex flex-column align-stretch"
    style="gap: 10px">
      <FileUpload></FileUpload>


      <v-btn color="primary" @click="handleClick">
        Process app
      </v-btn>
    </v-container>


</template>