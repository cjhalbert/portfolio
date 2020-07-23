<template>
	<section id="work">
		<h1>Here's some of my work!</h1>
    <div class="project-grid">
      <div>
        <router-link to="/Circles"><img src="../assets/circles.png" alt=""></router-link>
        <h2>Circles</h2>
        <p>Illustration, Visual Design</p>
      </div>
      <div>
        <router-link to="/Maxwell"><img src="../assets/maxwell.png" alt=""></router-link>
        <h2>Maxwell Denari</h2>
        <p>Branding, Visual Design</p>
      </div>
      <div>
        <router-link to="/Facebook"><img src="../assets/facebook.png" alt=""></router-link>
        <h2>Facebook Marketing Partners</h2>
        <p>UX Design, Product Design, User Research</p>
      </div>
      <div>
        <router-link to="/Whocares"><img src="../assets/whocares.png" alt=""></router-link>
        <h2>Who Cares Visual Style</h2>
        <p>Illustration, Visual Design</p>
      </div>
      <div>
        <router-link to="/Beneficence"><img src="../assets/benrec.png" alt=""></router-link>
        <h2>Beneficence Records</h2>
        <p>Web Design, Branding, Visual Design</p>
      </div>
      <div>
        <router-link to="/Equinix"><img src="../assets/equinix.png" alt=""></router-link>
        <h2>Equinix Edge Services</h2>
        <p>UX Design, Product Design, User Research</p>
      </div>
    </div>
	</section>
</template>

<style lang="scss" scoped>
section {
	display: flex;
	justify-content: center;
	align-items: center;
  flex-direction: column;
  background-color: #F8F7FE;
  padding: 10vw;
}

h1 {
  font-size: 40px;
  margin: 0;
  margin-bottom: 5vw;
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

img {
  width: 100%;
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