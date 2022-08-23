import { createRouter, createWebHistory } from "vue-router";

import TheMobileView from "@/views/TheMobileView.vue";
import ContactPage from "@/views/ContactPage.vue";
import TheMediaPage from "@/views/TheMediaPage.vue";
import ThePriceList from "@/views/ThePriceList.vue";
import TheAboutPage from "@/views/TheAboutPage.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", name: "app", component: TheMobileView },
  { path: "/contact", name: "contact", component: ContactPage },
  { path: "/media", name: "media", component: TheMediaPage },
  { path: "/pricelist", name: "pricelist", component: ThePriceList },
  { path: "/about", name: "about", component: TheAboutPage },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // BEFORE:
      // return { selector: to.hash }

      return { el: to.hash };
    }
  },
  routes, // short for `routes: routes`
});

export default router;
