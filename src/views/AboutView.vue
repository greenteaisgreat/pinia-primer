<script setup>
import { useCounterStore } from '@/stores/counter'
const storeCounter = useCounterStore()
</script>

<template>
  <h1>
    <div class="about">About</div>
    <button @click="storeCounter.increment" class="counter-button">{{ storeCounter.count }}</button>
  </h1>
</template>

<style>
.counter-button {
  padding: 1rem;
  border-radius: 20px;
  font-size: 3rem;
  margin: 2rem;
}
</style>
