<script setup>
defineProps({
  heal: {
    type: Number,
    required:true
  }})

</script>

<template>
  <div class="health opponent__health">
    <div class="health__bar" :style="{width: heal + '%', backgroundColor: 'hsl('+heal*1.2+',50%,50%' }">
      <span class="health__value"> {{ heal }} </span>
    </div>
  </div>
</template>
