<script>
export default {
  data() {
    return {
      count: 0,
      countAmount: 0,
      counterTitle: 'Counter Standard'
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter Extended'
      } else {
        return 'Counter Standard'
      }
    }
  },
  methods: {
    increment() {
      this.count += this.countAmount
    }
  }
}
</script>

<template>
  <h2>{{ displayTitle }}</h2>
  <h3>Optimized Increment: {{ optimizedIncrementAmount }}</h3>
  <button @click="increment">Click Me!</button> <br />
  <span>
    <label for="countAmount">Increment By: </label>
    <input type="number" id="countAmount" v-model="countAmount" />
  </span>
  <p>{{ count }}</p>
  <hr />
</template>

<style></style>
