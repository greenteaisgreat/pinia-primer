<script>
export default {
  props: {
    text: String,
    icon: String,
    left: Boolean
  }
}
</script>

<template>
  <button>
    <!--Slots are general placeholders that you can use to store data
    within an element. You can also use them to store default values,
    if no argument is provided elsewhere where they're used. They're also
    really helpful when multiple conditions need to happen, based on events;
    a better alternative to having long chains of v-if, v-else-if -->
    <slot>Submit</slot>
  </button>
  <button>
    <slot v-if="left">It's True!</slot>
    <slot v-else>It's a string</slot>
  </button>
</template>

<style scoped></style>
