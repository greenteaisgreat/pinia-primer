<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

<template>
  <div class="count">
    {{ storeCounter.count }}
  </div>
  <div class="buttons">
    <button @click="storeCounter.decrement">-</button>
    <button @click="storeCounter.increment">+</button>
  </div>
  <hr />
  <div class="even-or-odd">This number is currently {{ storeCounter.determineParity }}</div>
  <hr />
  <div class="edit-counter">
    <h3>Edit Counter:</h3>
    <input type="number" v-model="storeCounter.count" />
  </div>
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
