<script>
  export default {
    data() {
      return {
        msg: 'Howdy!',
        favCharacters: [],
        characters: [
          { name: 'Geralt', age: 23, special: 'Fire' },
          { name: 'Sam', age: 43, special: 'Water' },
          { name: 'Derk', age: 87, special: 'Air' },
          { name: 'Werl', age: 28, special: 'Fire' },
        ],
        newChar: { name: '', age: null, special: '' },
      };
    },
    methods: {
      addFav(fav) {
        this.favCharacters.push(fav);
      },
      addChar() {
        this.characters.push({
          name: this.newChar.name,
          age: this.newChar.age,
          special: this.newChar.special,
        });
        this.newChar = { name: '', age: null, special: '' };
      },
    },
    computed: {
      charAttributes() {
        const attributes = {};
        this.characters.forEach((char) => {
          attributes[char.special]
            ? attributes[char.special]++
            : (attributes[char.special] = 1);
        });
        const totals = Object.values(attributes).reduce((a, b) => a + b);
        for (const key in attributes) {
          attributes[key] = ((attributes[key] / totals) * 100).toFixed(0) + '%';
        }
        return attributes;
      },
    },
  };
</script>

<template>
  <h1>Smiling Friends Characters</h1>
  <p v-if="!characters.length">No Characters Exist 😔</p>
  <ul v-else>
    <li v-for="(char, i) in characters" :key="`char-${i}`">
      <button @click="addFav(char)">⭐️ Favorite</button>
      Name: {{ char.name }}, Age: {{ char.age }}, Special: {{ char.special }}
    </li>
  </ul>
  <h2>Favorite Characters</h2>
  <p v-if="!favCharacters.length">No favorite characters 😔</p>
  <ul v-else>
    <li v-for="(fav, i) in favCharacters" :key="`fav-${i}`">{{ fav.name }}</li>
  </ul>
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
  <h2>Total Character Attribute Percentages</h2>
  <div>
    <pre v-if="characters.length">{{ charAttributes }}</pre>
    <p v-else>No Character Attributes 😔</p>
  </div>
</template>
