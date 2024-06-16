<script setup>
  import { computed, ref, onMounted } from 'vue';

  // imported components in Composition don't need to be registered
  import BaseButton from './BaseButton.vue';

  //prop is being defined in App.vue as an attribute
  const props = defineProps({
    regionName: {
      type: String,
      default: 'Poopo',
    },
  });

  const emits = defineEmits(['change-region']);

  const region = ref('Kanto');
  const element = ref('Lightning');

  const regionCaps = computed(() => {
    return (element.value = region.value.endsWith('o') ? 'Hurray!' : 'Boooo');
  });
  console.log(regionCaps.value);

  const regionType = computed(() => {
    return props.regionName + ' ' + element.value;
  });

  const pokedex = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
  ).then((res) => res.json());

  function changeRegionName() {
    region.value = region.value === 'Kanto' ? 'Hoen' : 'Kanto';
    emits('change-region');
  }

  onMounted(() => {
    console.log('Do this thing!');
  });
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
  <h2>Region Element: {{ regionType }}</h2>
  <button @click="changeRegionName">Change Region Name</button>
  <!-- Computed methods shouldn't be called, like it is below;
  computed methods are more suited for having data be displayed based on
  certain conditions and for caching expensive functionality -->
  <!-- <button @click="regionCaps">Make Caps!</button> -->
  <br />
  <br />
  <BaseButton />
  <pre>{{ pokedex }}</pre>
</template>

<style scoped></style>
