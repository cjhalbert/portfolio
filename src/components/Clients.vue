<template>
	<section name="about" class="global-section">
    <div class="about-text">
      <h1>Clients</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et leo tristique, malesuada velit ut, vulputate quam. Quisque commodo velit eu elit sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et leo tristique, malesuada velit ut, vulputate quam. Quisque commodo velit eu elit sodales.</p>
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
  color: black;
  margin: 0;
}

.about-text {
  width: 40vw;
}  
</style>