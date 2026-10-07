import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const determineParity = computed(() => {
    if (count.value % 2 === 0) return 'even'
    else return 'odd'
  })

  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, increment, decrement, determineParity }
})
