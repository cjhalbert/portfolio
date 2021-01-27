<template>
	<section id="work">
		<h1>Visual Design</h1>
    <div class="project-grid">
      <div class="project">
        <router-link to="/Circles"><img src="../assets/circles.png" alt=""></router-link>
        <h2>Circles</h2>
        <p>Illustration, Visual Design</p>
      </div>
      <div class="project">
        <router-link to="/Maxwell"><img src="../assets/maxwell.png" alt=""></router-link>
        <h2>Maxwell Denari</h2>
        <p>Branding, Visual Design</p>
      </div>
      <div class="project">
        <router-link to="/Whocares"><img src="../assets/whocares.png" alt=""></router-link>
        <h2>Who Cares Visual Style</h2>
        <p>Illustration, Visual Design</p>
      </div>
    </div>
	</section>
</template>

<style lang="scss" scoped>
.project {
  margin-bottom: 5vh;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 10vw;
}

h1 {
  font-size: 40px;
  margin: 0;
  margin-bottom: 10vw;
  font-family: "Orpheus Pro", serif;
  color: #7160F4;
}

h2 {
  font-family: "Neue Haas Grotesk Text Pro", sans-serif;
  color: #7160F4;
  font-size: 16px;
  margin-bottom: 0;
}

p {
  font-family: "Orpheus Pro", serif;
  margin: 0;
  font-style: italic;
}

img {
  width: 100%;
  border: 1px solid black;
}

img:hover {
  transition: all .5s;
  transform: scale(1.02);
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 25px;
  }
}
</style>