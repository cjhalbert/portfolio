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
::selection {
  color: white;
  background: #483C9E;
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

.project-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 5vw;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }
}
@media screen and (max-width: 900px) {
  .project-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 600px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
