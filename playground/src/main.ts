// the typical name for a directory containing your routes
// is labeled "views"
import { createApp } from 'vue';
// webHistory options are basically ways for how you want your URLs to
// be displayed and how they'll go about serving them
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import App from './App.vue';
import { routes } from './router';

const app = createApp(App);

// createRouter takes an object that will contain all possible
// routes and where they lead to
const router = createRouter({
  // createWebHistory is the most common option for SPAs; createWebHashHistory
  // appends a # character, though this is bad for SEO; the former looks like
  // a regular URL, though you do need to provide a fallback in case someone
  // directly tries to provide a path in their search bar for your site
  history: createWebHashHistory(),
  routes,
});

app.use(router);
app.mount('#app');

// single-line way, but it's harder to read
// createApp(App).use(router).mount('#app');
