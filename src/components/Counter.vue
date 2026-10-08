<script setup>
import { useCounterStore } from '@/stores/counter'
const storeCounter = useCounterStore()
</script>

<template>
  <div class="count">
    {{ storeCounter.count }}
  </div>
</template>

<style scoped>
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
