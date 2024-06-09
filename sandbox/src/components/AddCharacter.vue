<script>
  export default {
    props: {
      actors: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        newChar: { name: '', age: null, special: '' },
      };
    },
    methods: {
      addChar() {
        this.actors.push({
          name: this.newChar.name,
          age: this.newChar.age,
          special: this.newChar.special,
        });
        this.newChar = { name: '', age: null, special: '' };
      },
    },
  };
</script>

<template>
  <form @submit.prevent>
    <h2>Enter a Character</h2>
    <div>
      <p>Name</p>
      <label for="character"></label>
      <input type="text" id="character" v-model="newChar.name" />
    </div>
    <div>
      <p>Age</p>
      <label for="age"></label>
      <input type="number" id="age" v-model="newChar.age" />
    </div>
    <div>
      <p>Special</p>
      <label for="special"></label>
      <input type="text" id="special" v-model="newChar.special" />
    </div>
    <br />
    <button @click="addChar">Add Character</button>
  </form>
</template>

<style scoped></style>
