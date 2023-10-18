<script setup>
import {useGameStore} from "@/gameStore";
import OpponentContainer from "@/components/OpponentContainer.vue";
const gameStore = useGameStore();
</script>

<template>
  <div id="game">
    <OpponentContainer v-for="opponent in gameStore.opponents"
                       :id="opponent.id"
                       :opponent="opponent">
    </OpponentContainer>
  </div>
</template>

<style scoped>
</style>