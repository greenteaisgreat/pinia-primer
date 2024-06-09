<script>
  export default {
    //can also be used like this, below, but unable to define
    //any types or if it's required and many other properties
    // props: ['actors'],
    props: {
      actors: {
        type: Array,
        required: true,
      },
    },
    computed: {
      charAttributes() {
        const attributes = {};
        this.actors.forEach((char) => {
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
  <h2>Total Character Attribute Percentages</h2>
  <div>
    <pre v-if="actors.length">{{ charAttributes }}</pre>
    <p v-else>No Character Attributes 😔</p>
  </div>
</template>

<style></style>
