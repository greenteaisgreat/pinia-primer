<script>
  import { computed, ref } from 'vue';

  export default {
    async setup() {
      const region = ref('Kanto');
      // computed methods in Composition must have a function as first arg
      const regionCaps = computed(() => {
        return (region.value = region.value.toUpperCase());
      });
      const pokedex = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
      ).then((res) => res.json());
      // returns must be wrapped in an object in setup()!!
      // also, it's good standard to list returns alphabetically!
      return {
        pokedex,
        region,
        regionCaps,
      };
    },
    methods: {
      changeRegionName() {
        this.region = this.region === 'Kanto' ? 'Hoen' : 'Kanto';
      },
    },
  };
</script>

<template>
  <h2>Region Name: {{ region }}</h2>
  <button @click="changeRegionName">Change Region Name</button>
  <button @click="regionCaps">Make Caps!</button>
  <pre>{{ pokedex }}</pre>
</template>

<style lang="scss" scoped></style>
