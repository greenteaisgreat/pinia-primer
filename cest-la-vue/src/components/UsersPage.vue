<script>
export default {
  data: () => ({
    users: [],
  }),
  methods: {
    async fetchUsers() {
      try {
        this.users = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ).then((res) => res.json());
      } catch (error) {
        console.log("There was an error:", error);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<template>
  <ul>
    <li v-for="person in users">
      <p>Name: {{ person.name }}</p>
      <p>Email: {{ person.email }}</p>
    </li>
  </ul>
</template>

<style scoped>
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
