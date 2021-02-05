<template>
	<section name="about" class="global-section">
    <div class="about-text">
      <h1>Clients</h1>
      <p>Over the course of my professional career I've been lucky enough to have had the opportunity to work with a bunch of really awesome clients, people, and companies! This has given me experience in a variety of different industries, product sizes, and team compositions. Here are just a few of the people I've worked with!</p>
    </div>
    <div>
      <img src="../assets/clients.png" alt="">
    </div>
	</section>
</template>

<style lang="scss" scoped>
section {
	display: flex;
	justify-content: space-between;
	align-items: center;
  font-family: "Orpheus Pro", serif;
  color: #7160F4;
}

img {
  width: 30vw;
}

h1 {
  font-size: 40px;
  margin: 0;
  margin-bottom: 1rem;
}

p {
  font-size: 18px;
  line-height: 35px;
  color: black;
  margin: 0;
}

.about-text {
  width: 40vw;
}

@media screen and (max-width: 600px) {
  section {
    padding: 5vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .about-text {
    width: 100%;
  }
  img {
    width: 80vw;
    margin-top: 1vh;
  }
  h1 {
    font-size: 25px;
  }
  p {
    line-height: 28px;
    font-size: 14px;
  }
}
</style>