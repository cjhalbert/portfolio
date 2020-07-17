<template>
	<section name="about" class="global-section">
		<div>
      <img src="../assets/corey.png" alt="">
    </div>
    <div class="about-text">
      <h1>Hi, nice to meet you!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et leo tristique, malesuada velit ut, vulputate quam. Quisque commodo velit eu elit sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et leo tristique, malesuada velit ut, vulputate quam. Quisque commodo velit eu elit sodales.</p>
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