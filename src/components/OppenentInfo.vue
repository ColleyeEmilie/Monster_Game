<script setup>
defineProps({
  name: {
    type: String,
    required:true
  }})
</script>

<template>
  <h2 class="opponent__infos">
    <span class="opponent__status">  </span>
    <span class="opponent__name"> {{ name}} </span>
  </h2>
</template>
