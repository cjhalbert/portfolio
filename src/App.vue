<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  components: {
    Nav
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
