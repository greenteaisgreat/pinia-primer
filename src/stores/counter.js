import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const determineParity = computed(() => {
    if (count.value % 2 === 0) return 'even'
    else return 'odd'
  })
  // test
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, increment, decrement, determineParity }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
