<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true
    },
    newUser: {
      type: Object,
      required: true
    }
  },
  emits: ['change-name']
}
</script>

<template>
  <h2>User: {{ userData.name }}</h2>
  <h3>Fav Foods: {{ userData.favFoods }}</h3>
  <form @submit.prevent>
    <input type="text" v-model="newUser.name" />
    <button @click="$emit('change-name')">Change My Name!</button>
  </form>
</template>

<style lang="scss" scoped></style>
