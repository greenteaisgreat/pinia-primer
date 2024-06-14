<script>
  import Pokedex from './components/Pokedex.vue';
  // https://pokeapi.co/api/v2/pokemon?limit=151
  export default {
    components: {
      Pokedex,
    },
    // when using Options, setup should be placed top-level, since it's ran at
    // the start of any Vue app. Also, everything in setup is pure, vanilla JS;
    // Vue doesn't do any magic for you; the 'return' keyword MUST be used
    // async setup() {
    //   const region = 'kanto';
    //   const pokedex = await fetch(
    //     'https://pokeapi.co/api/v2/pokemon?limit=151',
    //   ).then((res) => res.json());
    //   // returns must be wrapped in an object in setup()!!
    //   return {
    //     pokedex,
    //     region,
    //   };
    // },
    // data: () => ({
    //   pokedex: [],
    // }),
    // methods: {
    //   async fetchPokemon() {
    //     try {
    //       this.pokedex = await fetch(
    //         'https://pokeapi.co/api/v2/pokemon?limit=151',
    //       ).then((res) => res.json());
    //       // demonstration setup() variable access
    //       console.log(this.region);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    // },
    beforeCreate() {},
    created() {
      console.log(this.pokedex);
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
  <!-- <Suspense> MUST be used on a parent component that's registering content
  from a child component! A warning will be issued to let you know if you do that -->
  <Suspense>
    <Pokedex regionName="Peepee" />
    <template v-slot:fallback>
      <h3>Loading Pokedex data</h3>
    </template>
  </Suspense>
  <!-- <button @click="fetchPokemon">Get Pokemon!</button> -->
  <img id="ditto" />
</template>

<style scoped></style>
