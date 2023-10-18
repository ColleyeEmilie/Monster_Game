<script setup>
import {useGameStore} from "@/gameStore";
const gameStore = useGameStore();

function updateHeal(min, max, message){
  for (const opponent of gameStore.opponents) {
    const degats = Math.floor(Math.random() * (max - min + 1) + min);
    opponent.heal -= degats;
    gameStore.messages.push({id:2, sentence: opponent.name +' à eu '+ message + ' de '+ degats +' dégats'})
  }
}

function defeat(){
  for (const opponent of gameStore.opponents) {
  if(opponent.heal <= 0){
    opponent.heal =0;
    gameStore.gameStatus = 'not-playing';
    }
  }
}

function attack(){
  updateHeal(1, 7, 'une attaque');
  defeat();
}
function specialAttack(){
  updateHeal(5, 15, 'une attaque spéciale')
  defeat();
}
function heal(){
  if(gameStore.healCount >= 0){
    for (const opponent of gameStore.opponents) {
      if(opponent.heal < 100){
        opponent.heal += Math.floor(Math.random() * (10 - 3 + 1) + 3);
        if(opponent.heal > 100){
          opponent.heal = 100;
        }
      }
    }
    gameStore.healCount--;
    if(gameStore.healCount===0){
      gameStore.disabledButton = true;
    }
  }
}

</script>

<template>
  <div>
    <button id="attack" @click="attack" >Attack 🏹</button>
    <button id="special-attack" @click="specialAttack">Special Attack 🛸</button>
    <button id="heal" @click="heal" :disabled="gameStore.disabledButton">Heal 💉</button>
    <button id="give-up" @click="gameStore.gameStatus = 'not-playing'">Give Up ⚰️</button>
  </div>
</template>

<style>

</style>
