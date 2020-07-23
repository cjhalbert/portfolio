<template>
  <fixed-header>
    <nav class="navbar" id="nav" v-if="$route.path == '/'"> 
      <Logo v-scroll-to="'#app'" />
      <ul>
        <li class="header-text"><a v-scroll-to="'#about'">about</a></li>
        <li class="header-text">/</li>
        <li class="header-text"><a v-scroll-to="'#work'">work</a></li>
      </ul>
      <a v-scroll-to="'#contact'" class="header-text">contact</a>
    </nav>
    <nav class="navbar project-nav" id="nav" v-else>
       <router-link to="/"><Logo /></router-link>
    </nav>
  </fixed-header>
</template>

<script>
import Vue from 'vue';
import FixedHeader from 'vue-fixed-header'
import Logo from "@/assets/Clogo.vue";
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);


export default {
  components: {
    FixedHeader,
    Logo
  },
  created: function() {
    console.log(this.$route.path);
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 4rem 0;
  position: fixed;
  width: 80vw;
  padding: 0 10vw;
  z-index: 10;

  ul {
    display: flex;
    list-style-type: none;
    flex-direction: row;
  }
}

.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 80vw
}

.project-nav {
  justify-content: center;
}
</style>