// Import dependences
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// Import components
import App from "./App.vue";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";

// Create routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/contact", name: "contact", component: Contact },
  ],
});
createApp(App).use(router).mount("#app");
