<script>
  // https://pokeapi.co/api/v2/pokemon?limit=151
  export default {
    data: () => ({
      pokedex: [],
    }),
    methods: {
      async fetchPokemon() {
        try {
          this.pokedex = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=151',
          ).then((res) => res.json());
        } catch (err) {
          console.log(err);
        }
      },
    },
    beforeCreate() {},
    created() {
      this.fetchPokemon();
    },
    // beforeMount() {
    //   console.log('Before Mount');
    // },
    // mounted() {
    //   console.log('Mounted');
    // },
    // beforeUnmount() {
    //   console.log('Before Unmounted');
    // },
    // unmounted() {
    //   console.log('Unmounted');
    // },
  };
</script>

<template>
  <h1>New App</h1>
  <pre>{{ pokedex }}</pre>
  <button @click="fetchPokemon">Get Pokemon!</button>
  <img id="ditto" />
</template>

<style scoped></style>
