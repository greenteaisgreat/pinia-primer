<script>
  import AddCharacter from './AddCharacter.vue';
  import CharacterAttributes from './CharacterAttributes.vue';
  import CharacterCard from './CharacterCard.vue';

  export default {
    components: {
      AddCharacter,
      CharacterAttributes,
      CharacterCard,
    },
    data() {
      return {
        favCharacters: [],
        characters: [
          { name: 'Geralt', age: 23, special: 'Fire' },
          { name: 'Sam', age: 43, special: 'Water' },
          { name: 'Derk', age: 87, special: 'Air' },
          { name: 'Werl', age: 28, special: 'Fire' },
        ],
      };
    },
    methods: {
      addFavorite(payload) {
        this.favCharacters.push(payload);
      },
    },
  };
</script>

<template>
  <h1>Smiling Friends Characters</h1>
  <p v-if="!characters.length">No Characters Exist 😔</p>
  <ul v-else>
    <li v-for="(char, i) in characters" :key="`char-${i}`">
      <CharacterCard :char="char" @fav-chars="addFavorite" />
    </li>
  </ul>
  <h2>Favorite Characters</h2>
  <p v-if="!favCharacters.length">No favorite characters 😔</p>
  <ul v-else>
    <li v-for="(fav, i) in favCharacters" :key="`fav-${i}`">
      Name: {{ fav.name.name }}
    </li>
  </ul>
  <AddCharacter :actors="characters" />
  <CharacterAttributes :actors="characters" />
</template>

<style scoped></style>
