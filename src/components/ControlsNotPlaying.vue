<script setup>
import {useGameStore} from "@/gameStore";
const gameStore = useGameStore();
</script>

<template>
  <div>
    <button id="start-new-game" @click="gameStore.gameStatus = 'playing'">Start New Game ✅</button>
  </div>
</template>

<style>

</style>