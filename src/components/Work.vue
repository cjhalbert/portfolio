<template>
	<section name="work">
		<h1>Here's some of my work!</h1>
    <div class="project-grid">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
	</section>
</template>

<style lang="scss" scoped>
section {
	display: flex;
	justify-content: center;
	align-items: center;
  flex-direction: column;
  background-color: #FCF6F4;
  padding: 10vw;
}

h1 {
  font-size: 40px;
  margin: 0;
  margin-bottom: 10vw;
  font-family: "Orpheus Pro", serif;
  color: #7160F4;
}

.project-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10vw;

  div {
    height: 100%;
    width: 100%;
    background-color: white;
    border: 1px solid black;
  }

  div::before {
    content: "";
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
  }
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 25px;
  }
}
</style>