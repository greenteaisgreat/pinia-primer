<script>
import { render } from "vue";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";

export default {
  components: {
    HomePage,
    LoginPage,
  },
  data: () => ({
    currentPage: "Home",
  }),
  methods: {
    showHomePage() {
      this.currentPage = "Home";
    },
    showLoginPage() {
      this.currentPage = "Login";
    },
  },
  // don't forget computed methods need a 'return' statement!!
  computed: {
    renderPage() {
      // due to currenPage's properties aligning
      // with the respective component's name
      return this.currentPage + "Page";
    },
  },
};
</script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
    </span>
    <nav class="nav">
      <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
    </nav>
  </header>
  <!-- <component> is a Vue specific element and 'is' links to that component;
  there's not much difference between it and just using <HomePage />
  
  <component :is="renderPage" /> -->

  <!-- the difference in using <component> is that it can be managed with pure JS
  as we're doing here with a computed property; we're concatenating the result of
  currentPage @click with 'Page', delivering a primitive routing system -->
  <component :is="renderPage" />

  <!-- Acceptable for 1 to 3 pages, but as sites get larger, it can
  become unruly to use v-if, v-else-if chaining; routing is the ideal
  option, but what's above is the next best solution -->
  <!-- <HomePage v-if="currentPage === 'Home'" />
  <LoginPage v-else /> -->
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
