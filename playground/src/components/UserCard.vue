<script>
  import { useCount } from '../composables/countStore.js';
  export default {
    setup() {
      const countStore = useCount();
      return {
        countStore,
      };
    },
    methods: {
      log() {
        console.log('With .this', this.useCount);
        console.log('Without .this', useCount);
      },
    },
    props: {
      userData: {
        type: Object,
        required: true,
      },
      // newUser: {
      //   type: Object,
      //   required: true,
      // },
    },
    created() {
      this.log();
    },
    emits: ['change-name'],
  };
</script>

<template>
  <h2>User: {{ userData.name }}</h2>
  <hr />
  <h2>Newer Counter</h2>
  <h4>Global Count: {{ countStore.globalCount }}</h4>
  <button @click="countStore.incrementGlobalCount">Increment Global</button>
  <h4>Local Count: {{ countStore.localCount }}</h4>
  <button @click="countStore.incrementLocalCount">Increment Local</button>
  <hr />
  <!-- <h3>Fav Foods: {{ userData.favFoods }}</h3>
  <form @submit.prevent>
    <input type="text" v-model="newUser.name" />
    <button @click="$emit('change-name')">Change My Name!</button>
  </form> -->
</template>

<style lang="scss" scoped></style>
