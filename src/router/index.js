import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Circles from "../views/Circles.vue";
import Maxwell from "../views/Maxwell.vue";
import Facebook from "../views/Facebook.vue";
import Whocares from "../views/Whocares.vue";
import Beneficence from "../views/Beneficence.vue";
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
    path: "/Beneficence",
    name: "Beneficence",
    component: Beneficence
  },
  {
    path: "/Equinix",
    name: "Equinix",
    component: Equinix
  }
];

const router = new VueRouter({
  routes
});

export default router;
