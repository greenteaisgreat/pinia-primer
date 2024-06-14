<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "Users",
  },
});
const users = ref([]);

async function fetchUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());

  return response;
}

// we assign users to fetchUsers for more reusable code; notice that
// an outer 'async' keyword isn't needed for an await value when using setup
users.value = await fetchUsers();
const uuid = ref(crypto.randomUUID());
</script>

<template>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="person in users" :key="uuid">
      <p>Name: {{ person.name }}</p>
      <p>Email: {{ person.email }}</p>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding: 10px;
}
ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}
li {
  margin: 10px 10px;
  list-style-type: none;
  border: 3px solid black;
  border-radius: 5px;
  padding: 10px;
}
p {
  padding: 3px;
}
</style>

<!-- Code showing the combination Options/Composition API way -->

<!-- <script>
import { ref } from "vue";

export default {
  // any time async is prepended on setup, you must use <Suspense>
  // in the parent component for it to have a fallback value
  async setup() {
    const users = ref([]);

    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());

      return response;
    }
    //we assign users to fetchUsers for more reusable code
    users.value = await fetchUsers();
    const uuid = ref(crypto.randomUUID());

    return {
      fetchUsers,
      users,
      uuid,
    };
  },

  // data: () => ({
  //   users: [],
  //   uuid: crypto.randomUUID(),
  // }),

  // methods: {
  //   async fetchUsers() {
  //     try {
  //       this.users = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       ).then((res) => res.json());
  //     } catch (error) {
  //       console.log("There was an error:", error);
  //     }
  //   },
  // },

  // removed when migrating options api to composition, as
  // fetchUsers would be called twice
  // created() {
  //   this.fetchUsers();
  // },
};
</script> -->
