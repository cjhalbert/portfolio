<template>
  <section class="global-section">
    <h1>Maxwell Denari</h1>
    <h2>Branding, Visual Design</h2>
    <p>Maxwell Denari is a freelance writer and photographer who has an immense passion for music and storytelling. Maxwell reached out to me to design a logo for his personal brand so we started working together. Over the course of a few ideas, revisions, and redesigns, we eventually came to a logo that he and I were both excited about.</p>

    <h2 class="section-title">First Round of Designs</h2>
    <div class="project-grid project-page">
        <div><img src="../assets/maxwell/maxwell-ideas1.svg" alt=""></div>
        <div><img src="../assets/maxwell/maxwell-ideas2.svg" alt=""></div>
        <div><img src="../assets/maxwell/maxwell-ideas3.svg" alt=""></div>
        <div><img src="../assets/maxwell/maxwell-ideas4.svg" alt=""></div>
        <div><img src="../assets/maxwell/maxwell-ideas5.svg" alt=""></div>
    </div>
    
    <h2 class="section-title">Final Options</h2>
    <div class="project-grid oneCol project-page">
        <div><img src="../assets/maxwell/max-mockup1.svg" alt=""></div>
        <div><img src="../assets/maxwell/max-mockup2.svg" alt=""></div>
        <div><img src="../assets/maxwell/max-mockup3.svg" alt=""></div>
        <div><img src="../assets/maxwell/max-mockup4.svg" alt=""></div>
    </div>

    <h2 class="section-title">Final Design</h2>
    <div class="project-grid oneCol project-page">
        <div><img src="../assets/maxwell/max-final-vert.svg" alt=""></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 15vh;  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-family: "Orpheus Pro", serif;
}

img {
  width: 100%;
}

h1 {
  font-size: 40px;
  margin: 0;
  color: #7160F4;
}

h2 {
  font-style: italic;
  margin: 0;
}

p {
  font-size: 18px;
  line-height: 35px;
  width: 50vw;
  margin-top: 5vh;
  text-align: center;
}

@media screen and (max-width: 600px) {
  p {
    width: 100%;
  }
}

.project-page {
  margin: 10vh 0;
}

.section-title {
  margin-top: 10vh;
}

.oneCol {
  grid-template-columns: 1fr;

  div {
    width: 50%;
  }
}
</style>