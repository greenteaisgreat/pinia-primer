<script setup>
import { computed, ref } from 'vue'
const count = ref(0)

function increment() {
  count.value++
}
function decrement() {
  count.value--
}
const determineParity = computed(() => {
  if (count.value % 2 === 0) return 'even'
  else return 'odd'
})
</script>

<template>
  <div class="count">
    {{ count }}
  </div>
  <div class="buttons">
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
  <hr />
  <div class="even-or-odd">This number is currently {{ determineParity }}</div>
</template>

<style>
.count {
  font-size: 60px;
  margin: 2rem;
}

.buttons button {
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-size: 3rem;
}
</style>
