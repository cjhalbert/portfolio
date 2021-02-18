<template>
  <section class="global-section">
    <h1 class="project-title">Facebook Marketing Partners</h1>
    <h2>UX Design, Product Design, User Research</h2>
    <img class="project-hero" src="../assets/facebook/facebook-header.png" alt="">
    <div class="overview-info">
      <div>
        <h1>Overview</h1>
        <p>During my time at ZURB as a product designer, I led a project to redesign Facebook's Marketing Partners platform. This platform was meant to assist marketers, advertisers, and agencies with the advertising campaigns they were running through Facebook's main social media platform. The users of FMP were also able to engage in a partner program with Facebook to have access to additional features, statistics, support channels, etc.</p>
      </div>
      <div>
        <h1>Role</h1>
        <p>Product Designer</p>
      </div>
       <div>
        <h1>Duration</h1>
        <p>6 Weeks</p>
      </div>
    </div>
     <hr>
    <div class="work-section">
      <h1>Sketches</h1>
      <p>At the beginning of an exploratory project, everything is pretty vague. Before I did any designing, any coding, any *anything*, I had to define what it is I was actually trying to do! I did this through several rounds of sketches, and discussions around those sketches. I started with more abstract sketches that represented broad ideas of what the Facebook Marketing Partners platform could be. These included small UI elements, isolated interactions, and illustrations that could be a springboard for discussion. Once the team started to gain alignment around some of the core ideas, I began to move the sketches into higher fidelity to illustrate how they would look within the context of the platform. Finally, after multiple meetings, passionate discussions, and a LOT of sketching, I moved into Sketch to do some wireframes.</p>
      <div class="work-grid">
        <img src="../assets/facebook/facebooksketch1.jpeg" alt="">
        <img src="../assets/facebook/facebooksketch2.jpeg" alt="">
        <img src="../assets/facebook/facebooksketch3.jpeg" alt="">
        <img src="../assets/facebook/facebooksketch4.jpeg" alt="">
        <img src="../assets/facebook/facebooksketch5.jpeg" alt="">
        <img src="../assets/facebook/facebooksketch6.jpeg" alt="">
        <img src="../assets/facebook/facebooksketch7.jpeg" alt="">
        <img src="../assets/facebook/facebooksketch8.jpeg" alt="">
      </div>
    </div>
    <hr>
      <div class="work-section">
      <h1>Hi-Fidelity Wireframes</h1>
      <p>Moving into wireframes was all about solidifying ideas and concepts, and moving the team towards a final vision of the feature. This was the longest phase of the project, and as a team we went through several weeks of iterations, with two weekly calls with team members, stakeholders, researchers, and other interested parties. This phase included a lot of constructive debate, several "Back to the drawing board" moments, and just as many "aha" moments. Eventually, at the end of all of this, we moved into finalizing our ideas into an interactive prototype</p>
      <div class="work-grid oneCol">
        <img src="../assets/facebook/facebookwireframe1.png" alt="">
        <img src="../assets/facebook/facebookwireframe2.png" alt="">
        <img src="../assets/facebook/facebookwireframe3.png" alt="">
        <img src="../assets/facebook/facebookwireframe4.png" alt="">
        <img src="../assets/facebook/facebookwireframe5.png" alt="">
      </div>
     </div>
    <hr>
    <div class="work-section">
      <h1>Interactive Prototype</h1>
      <p>Our final deliverable for this project was an interactive Marvel prototype. This deliverable allowed the team we were handing off to to quickly and easily present the suggested work to their shareholders, and outside team members.</p>
      <a href="https://marvelapp.com/prototype/9fa38ag/" class="prototype-link">Go To Prototype</a>
    </div>
    <hr>
    <div class="next-project-section">
      <h1 class="next-project-link"><router-link to="/helio">Helio Workflow</router-link></h1>
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
  height: auto;
}

.project-hero {
  margin: 10vh 0;
}

.overview-info {
  display: flex;

  p {
    text-align: left;
    margin: 0;
    width: 100%;
    font-weight: bold;
  }

  div {
    flex: 1;
  }

  div:first-child {
    flex: 3;
    margin-right: 5vw;

    p {
      font-weight: 400;
    }
  }
}

.work-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5vw;
  margin-top: 10vh;
}

@media screen and (max-width: 600px) {
  .work-grid {
    grid-template-columns: 1fr;

    img {
      margin-bottom: 10vh;
    }
  }

  .overview-info {
    flex-direction: column;

    div {
      margin-bottom: 5vh;
    }

    div:first-child {
      width: 100%;
    }
  }
}

img {
  width: 100%;
  box-shadow: 10px 10px 37px -15px rgba(133,130,133,1);
}

h2 {
  font-style: italic;
  margin: 0;
  text-align: center;
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
    width: 100%;
    margin-top: 1vh;
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

.prototype-link {
  border: 5px solid #7160F4;
  padding: 20px;
  font-size: 20px;
  margin-top: 3vh;
  color:  #7160F4;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    background-color:  #7160F4;
    color: white;
    transition: all 0.2s;
  }
}
</style>