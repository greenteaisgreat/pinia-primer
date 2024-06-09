<script>
  export default {
    data() {
      return {
        msg: 'Howdy!',
        characters: ['Sam', 'Andy', 'Tim', 'Nate'],
        count: 1,
        countAmount: 1,
        counterTitle: 'Counter Standard',
      };
    },
    computed: {
      //computed is similar to watch, except it's more performant
      //for local data; computed tracks when its dependencies
      //have changed. you're also able to chain dependencies in with
      //any methods defined within computed so that multiple values
      //can be connected together
      displayTitle() {
        if (this.count > 20) {
          return 'Counter Extended';
        } else {
          return 'Counter Standard';
        }
      },
      optimizedIncrementAmount() {
        return this.displayTitle.length * this.countAmount;
      },
    },
    methods: {
      increment() {
        this.count += this.optimizedIncrementAmount;
      },
    },
    watch: {
      //watch is best used for when you need to take advantage of side-effects,
      //such as in an API call or adjusting the speed on a video player. it's not
      //suited for tracking your actual data in your application; computed is better
      //suited for that. !! ——> also, you need to name all methods in watch the
      //same as the label for the data that you're tracking
      countAmount(newValue) {
        console.log(newValue);
      },
      count(newValue) {
        console.log(newValue);
        if (this.count > 20) {
          //the <h2> was previously {{counterTitle}}
          this.counterTitle = 'Counter Extended';
        }
      },
    },
  };
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
  <h1>Howdy World!</h1>
  <ul v-if="characters.length">
    <li v-for="char in characters">{{ char }}</li>
  </ul>
  <p v-else>No Characters 😔</p>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
