<script>
import Counter from './components/Counter.vue'
import UserCard from './components/UserCard.vue'

export default {
  components: {
    Counter,
    UserCard
  },
  data() {
    return {
      userData: {
        name: 'Nathan',
        age: 34,
        favFoods: ['sushi', 'curry', 'seafood']
      },
      newUser: {
        name: ''
      }
    }
  },
  methods: {
    changeName() {
      this.userData.name = this.newUser.name
      this.newUser.name = ''
    }
  }
}
</script>

<template>
  <UserCard @change-name="changeName" :userData="userData" :newUser="newUser" />
  <Counter />
</template>

<style scoped></style>
