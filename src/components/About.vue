<template>
	<section id="about" class="global-section home-section">
		<div>
      <img src="../assets/headshot.png" alt="">
    </div>
    <div class="about-text">
      <h1>Hi, nice to meet you!</h1>
      <p>I’m Corey – An Austin based product designer, front-end web developer, UX researcher, music nerd, movie buff, philosopher, and high-fashion connoisseur. I like to wear lots of hats in my professional life, and am constantly thinking of how I can apply my interdisciplinary experience and mindset in unique and exciting ways. I am a passionate critical thinker who loves to dig into complex problems and dissect them to find the most empathetic, human-first solutions, and am excited to work on my next big project!</p>
    </div>
	</section>
</template>

<style lang="scss" scoped>
section {
	display: flex;
	justify-content: space-between;
	align-items: center;
  background-color: #F8F7FE;
  font-family: "Orpheus Pro", serif;
  color: #7160F4;
}

.about-text {
  width: 40vw;
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
  color: #483C9E;
  margin: 0;
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
    margin-bottom: 5vh;
    width: 50vw;
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