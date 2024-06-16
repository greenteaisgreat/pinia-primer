<script>
  import { useCount } from '../composables/countStore.js';

  export default {
    setup() {
      const countStore = useCount();
      console.log('COUNT STORE', countStore);
      return {
        countStore,
      };
    },

    data() {
      return {
        count: 0,
        countAmount: 0,
        counterTitle: 'Counter Standard',
      };
    },

    computed: {
      displayTitle() {
        if (this.count > 20) {
          return 'Counter Extended';
        } else {
          return 'Counter Standard';
        }
      },
    },

    methods: {
      increment() {
        this.count += this.countAmount;
        this.countStore.localCount.value += this.countAmount;
      },
    },
  };
</script>

<template>
  <h2>{{ displayTitle }}</h2>
  <h2>Newer Counter</h2>
  <h4>Global Count: {{ countStore.globalCount }}</h4>
  <button @click="countStore.incrementGlobalCount">Increment Global</button>
  <h4>Local Count: {{ countStore.localCount }}</h4>
  <button @click="countStore.incrementLocalCount">Increment Local</button>
  <hr />
  <h2>Newish Count: {{ countStore.localCount.value }}</h2>
  <!-- <h3>Optimized Increment: {{ optimizedIncrementAmount }}</h3> -->
  <button @click="increment">Click Me!</button> <br />
  <span>
    <label for="countAmount">Increment By: </label>
    <input type="number" id="countAmount" v-model="countAmount" />
  </span>
  <h2>Old Count: {{ count }}</h2>
</template>

<style></style>
