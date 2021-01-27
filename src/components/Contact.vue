<template>
	<section id="contact" class="global-section">
		<h1>Let's work together!</h1>
    <p>email<span>halbertco.2015@gmail.com</span></p>
    <p>phone number<span>260.242.3546</span></p>
	</section>
</template>

<style lang="scss" scoped>
section {
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  background-color: #F8F7FE;
}

h1 {
  font-size: 40px;
  margin: 0;
  font-family: "Orpheus Pro", serif;
  color: #7160F4;
  text-align: center;
}
p {
  font-family: "Orpheus Pro", serif;
  font-style: italic;

  span {
    font-family: "Neue Haas Grotesk Text Pro", sans-serif;
    font-weight: bold;
    font-style: normal;
    margin-left: 1vw;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    margin-bottom: 2rem;
    font-size: 25px;
  }
  p span {
    margin-left: 2vw;
  }
}
</style>