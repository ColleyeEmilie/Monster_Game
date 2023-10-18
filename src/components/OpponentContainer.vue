<script setup>
import OpponentInfo from "@/components/OppenentInfo.vue";
import OpponentHealth from "@/components/OpponentHealth.vue";

defineProps({
  opponent: {
    type: Object,
    required:true
  }})
</script>


<template>
  <div class="opponent">
    <OpponentInfo :name="opponent.name"/>
    <OpponentHealth :heal="opponent.heal" />
  </div>
</template>

