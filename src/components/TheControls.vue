<script setup>
import ControlsPlaying from "@/components/ControlsPlaying.vue";
import ControlsNotPlaying from "@/components/ControlsNotPlaying.vue";
import {useGameStore} from "@/gameStore";
const gameStore = useGameStore();
</script>

<template>
  <div id="controls">
    <ControlsNotPlaying  v-if="gameStore.gameStatus === 'not-playing'"/>
    <ControlsPlaying  v-else/>
  </div>
</template>


