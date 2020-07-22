<template>
  <div id="app">
    <fixed-header>
      <nav class="navbar" id="nav">
        <Logo v-scroll-to="'#app'" />
        <ul>
          <li class="header-text"><a v-scroll-to="'#about'">about</a></li>
          <li class="header-text">/</li>
          <li class="header-text"><a v-scroll-to="'#work'">work</a></li>
        </ul>
        <a v-scroll-to="'#contact'" class="header-text">contact</a>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      </nav>    
    </fixed-header>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import Logo from "@/assets/Clogo.vue";
import FixedHeader from 'vue-fixed-header'
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);



export default {
  components: {
    Logo,
    FixedHeader,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 4rem 0;
  position: fixed;
  width: 80vw;
  padding: 0 10vw;

  ul {
    display: flex;
    list-style-type: none;
    flex-direction: row;
  }
}

.header-text {
  font-family: "Orpheus Pro", serif;
  font-size: 16px;
  color: black;
  list-style: none;
  cursor: pointer;

  a {
    color: black;
    text-decoration: none;
  }

  &:nth-child(2) {
    margin: 0 0.5rem;
  }
}

.global-section {
  padding: 0 10vw;
  height: 100vh;
}

.router-link-active {
  text-decoration: underline;
}

.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 80vw
}
</style>
