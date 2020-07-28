import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Circles from "../views/Circles.vue";
import Maxwell from "../views/Maxwell.vue";
import Facebook from "../views/Facebook.vue";
import Whocares from "../views/Whocares.vue";
import Helio from "../views/Helio.vue";
import Equinix from "../views/Equinix.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Circles",
    name: "Circles",
    component: Circles
  },
  {
    path: "/Maxwell",
    name: "Maxwell",
    component: Maxwell
  },
  {
    path: "/Facebook",
    name: "Facebook",
    component: Facebook
  },
  {
    path: "/Whocares",
    name: "Whocares",
    component: Whocares
  },
  {
    path: "/Helio",
    name: "Helio",
    component: Helio
  },
  {
    path: "/Equinix",
    name: "Equinix",
    component: Equinix
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
