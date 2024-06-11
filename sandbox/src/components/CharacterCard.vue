<script>
  export default {
    props: {
      char: {
        type: Object,
        required: true,
      },
      //BAD PRACTICE: it starts to convolute the code space
      //emits is the better way to go
      // favCharacters: {
      //   type: Array,
      //   required: true,
      // },
    },
    emits: ['fav-chars'],
    methods: {
      addFav() {
        //the second arg in $emit is the payload; it's best to group multiple
        //properties into a single object, rather than add more than 2 args
        this.$emit('fav-chars', {
          name: this.char,
          id: crypto.randomUUID(),
        });
      },
    },
  };
</script>

<template>
  <div>
    <button @click="addFav">⭐️ Favorite</button>
    <p>
      Name: {{ char.name }}, Age: {{ char.age }}, Special: {{ char.special }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
