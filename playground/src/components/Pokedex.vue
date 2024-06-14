<script setup>
  import { computed, ref } from 'vue';

  const region = ref('Kanto');
  const element = ref('Lightning');

  const regionCaps = computed(() => {
    return (element.value = region.value.endsWith('o') ? 'Hurray!' : 'Boooo');
  });
  console.log(regionCaps.value);

  const pokedex = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
  ).then((res) => res.json());

  function changeRegionName() {
    region.value = region.value === 'Kanto' ? 'Hoen' : 'Kanto';
  }
</script>

<!-- Showing the combination Options/Composition setup -->
<!-- <script>
  import { computed, ref } from 'vue';

  export default {
    async setup() {
      const region = ref('Kanto');
      const element = ref('Lightning');

      // computed methods in Composition must have a function as first arg
      const regionCaps = computed(() => {
        return (element.value = region.value.endsWith('o')
          ? 'Hurray!'
          : 'Boooo');
      });
      // can access computed property values much like ref();
      // it gets unpacked in <template> though, so no need to use .value
      // within <template>
      console.log(regionCaps.value);

      const pokedex = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
      ).then((res) => res.json());

      function changeRegionName() {
        region.value = region.value === 'Kanto' ? 'Hoen' : 'Kanto';
      }

      // returns must be wrapped in an object in setup()!!
      // also, it's good standard to list returns alphabetically!
      return {
        changeRegionName,
        pokedex,
        region,
        regionCaps,
      };
    },
    // methods: {
    //   changeRegionName() {
    //     this.region = this.region === 'Kanto' ? 'Hoen' : 'Kanto';
    //   },
    // },
  };
</script> -->

<template>
  <h2>Region Name: {{ region }}</h2>
  <h2>Element Type: {{ regionCaps }}</h2>
  <button @click="changeRegionName">Change Region Name</button>
  <!-- Computed methods shouldn't be called, like it is below;
  computed methods are more suited for having data be displayed based on
  certain conditions and for caching expensive functionality -->
  <!-- <button @click="regionCaps">Make Caps!</button> -->
  <pre>{{ pokedex }}</pre>
</template>

<style scoped></style>
