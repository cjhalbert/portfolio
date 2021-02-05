<template>
  <section class="global-section">
    <h1 class="project-title">Who Cares Visual Style</h1>
    <h2>Illustration, Visual Design</h2>
    <p class="project-description">whocares is an indie rock band from Muncie, Indiana that I play guitar for. I started the band with a few of my close friends and we've played bars and basements across Muncie since 2018. As a fun side project, I decided to brand the band and create a visual style for social media, posters, and merchandise. I decided to try to make the visual style for the band as far from the actual sound as possible as a sort of inside joke between the members of the band.</p>
    <div class="project-grid oneCol project-page">
        <div><img src="../assets/whocares/whocares-full.svg" alt=""></div>
        <div><img src="../assets/whocares/whocares-lines.png" alt=""></div>
        <div><img src="../assets/whocares/whocares-jagged.png" alt=""></div>
        <div><img src="../assets/whocares/whocares-wavey.png" alt=""></div>
        <div><img src="../assets/whocares/whocares-wacky.png" alt=""></div>
        <div><img src="../assets/whocares/whocares-stacked.png" alt=""></div>
        <div><img src="../assets/whocares/whocares-outline.png" alt=""></div>
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

h2 {
  font-style: italic;
  margin: 0;
}

p {
  font-family: "Neue Haas Grotesk Text Pro", sans-serif;
  color: #6A6B6B;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  width: 50vw;
  margin-top: 1vh;
}

@media screen and (max-width: 600px) {
  p {
    margin-top: 1vh;
    width: 100%;
  }
}

.project-page {
  margin: 10vh 0;

  div {
    display: flex;
    flex-direction: row;
  }
}

.section-title {
  margin-top: 10vh;
}

.oneCol {
  grid-template-columns: 1fr;
}
</style>