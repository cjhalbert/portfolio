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

  .project-title {
    text-align: center;
  }

  h1 {
    font-size: 40px;
    margin: 0;
    color: #7160F4;
    width: 100%;
}
}
.oneCol {
  grid-template-columns: 1fr;
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

.work-section {
  margin-top: 10vh;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }

  p {
    margin: 0;
    text-align: center;
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    h1 {
      text-align: left;
      width: 100%;
    }

    p {
      margin-top: 0;
      width: 100%;
      text-align: left;
    }
  }
}

.project-description {
  text-align: center;
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
  .global-section {
    h1 {
      font-size: 24px;
      margin-bottom: 1.5vh;
      text-align: left;
    }
    h2 {
      font-size: 14px;
    }
  }
}
</style>
