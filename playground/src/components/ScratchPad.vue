<script>
import Counter from './components/Counter.vue'
import UserCard from './components/UserCard.vue'
import BaseButton from './components/BaseButton.vue'
import BaseLayout from './components/BaseLayout.vue'

export default {
  components: {
    BaseLayout,
    Counter,
    UserCard,
    BaseButton
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
  <BaseLayout>
    <!-- v-slot HAS to be colon, not equals! You can also use the shorthand
    for slots, which is a hashtag, #-->
    <template v-slot:sidebar><BaseButton :left="true"> </BaseButton> </template>
    <br />
    <template v-slot:main>
      <UserCard @change-name="changeName" :userData="userData" :newUser="newUser" />
    </template>
    <br />
    <template v-slot:footer>
      <Counter />
    </template>
  </BaseLayout>
  <!-- <BaseButton>{{ userData.name }}</BaseButton> -->
  <!-- <BaseButton :left="true">Not True</BaseButton> -->
</template>

<style>
* {
  margin: 10px 5px;
}
</style>
