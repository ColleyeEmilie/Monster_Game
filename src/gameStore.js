import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const useGameStore = defineStore('GameStatus', ()=>{
    const gameStatus = ref('not-playing');
    const messages = ref([]);
    const opponents =  ref([
        {name:'Emilie', heal:100, id:1},
        {name:'Julien', heal:100, id:2},
    ])
    const disabledButton = ref(false)
    const healCount = ref(2);
    const reversedMessages = computed(() => messages.value.slice().reverse());

    watch(gameStatus, (newStatus) => {
        if (newStatus === 'not-playing') {
            healCount.value = 2;
            messages.value.splice(0, messages.value.length);
            disabledButton.value = false;
            opponents.value.forEach((opponent)=>{
                opponent.heal = 100;
            })
            //for (const opponent of opponents) {
            //    opponent.heal = 100;
            //}
        }
    })

    return { gameStatus, messages, opponents, healCount, reversedMessages, disabledButton };
})