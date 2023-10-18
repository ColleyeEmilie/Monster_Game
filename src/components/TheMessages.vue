<script setup>
import {useGameStore} from "@/gameStore";
const gameStore = useGameStore();

</script>

<template>
  <div id="log" v-if="gameStore.reversedMessages.length">
    <ol>
      <li v-for="message in gameStore.reversedMessages" :key="message.id">{{message.sentence}}</li>
    </ol>
  </div>
</template>

<style scoped>
</style>