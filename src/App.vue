<template>
  <div id="app">
    <nav id="nav">
      <Logo />
      <ul>
        <li class="header-text"><a href="#about">about</a></li>
        <li class="header-text">/</li>
        <li class="header-text"><a href="#work">work</a></li>
      </ul>
      <a href="#contact" class="header-text">contact</a>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
import Logo from "@/assets/clogo.vue";

export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  padding: 0 10vw;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  ul {
    display: flex;
    list-style-type: none;
    flex-direction: row;
  }
}

.header-text {
  font-family: "Orpheus Pro", serif;
  font-size: 14px;
  color: black;
  list-style: none;

  a {
    color: black;
    text-decoration: none;
  }

  &:nth-child(2) {
    margin: 0 0.5rem;
  }
}

.router-link-active {
  text-decoration: underline;
}
</style>
