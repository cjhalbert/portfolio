<template>
  <section class="global-section">
    <h1>Helio Workflow</h1>
    <h2>Web Design, Front-End Development, Visual Design</h2>
    <p>Helio Workflow is a feature-set currently being added to ZURB's user testing platform <a href="https://helio.app/">Helio</a>. As a product designer at ZURB I led the ideation, design, and development of this feature-set, and was instrumental in moving the team through each step of the process.</p>
    <img class="project-hero" src="../assets/helio/helio-hero.png" alt="">
    <div class="overview-info">
      <div>
        <h1>Overview</h1>
        <p>During my time at ZURB as a product designer and engineer, I led a project to implement a revolutionary new feature to the user testing platform Helio. This feature, dubbed "Workflow", was intended to bring ZURB's progressive design philosophy directly into their user testing platform. My role in this project was three-fold: I worked collaboratively with a team to ideate, debate, and ultimately formulate a vision for what the feature would be, I designed (through sketches, prototypes, mockups, animations, etc.) several different user journeys through the feature, and I worked with an engineering team to develop the multiple different pieces of the feature.</p>
      </div>
      <div>
        <h1>Roles</h1>
        <p>Product Designer</p>
        <p>Front-End Engineer</p>
      </div>
    </div>
    <hr>
    <div class="work-section">
      <h1>Sketches</h1>
      <p>At the beginning of this exploratory project, everything was pretty vague. Before we did any designing, any coding, any *anything*, we had to define what it is we were actually trying to do! We did this through several rounds of sketches, and discussions around those sketches. We started with more abstract sketches that represented broad ideas of what Workflow could be. These included small UI elements, isolated interactions, and illustrations that could be a springboard for discussion. Once the team started to gain alignment around some of the core ideas, we began to move the sketches into higher fidelity to illustrate how they would look within the context of the platform. Finally, after multiple meetings, passionate discussions, and a LOT of sketching, we moved into Sketch to do some wireframes.</p>
      <div class="work-grid">
        <img src="../assets/helio/ideation1.jpeg" alt="">
        <img src="../assets/helio/ideation2.jpeg" alt="">
        <img src="../assets/helio/lofi.jpeg" alt="">
        <img src="../assets/helio/expmap.jpeg" alt="">
      </div>
    </div>
    <hr>
    <div class="work-section">
      <h1>Wireframes</h1>
      <p>Moving into wireframes was all about solidifying our ideas and concepts, and moving the team towards a final vision of the feature. This was the longest phase of the project, and as a team we went through 10 weeks of iterations, with two weekly calls with team members, stakeholders, researchers, and other interested parties. This phase included a lot of constructive debate, several "Back to the drawing board" moments, and just as many "aha" moments. Eventually, at the end of all of this, we moved into cleaning things up and starting to develop the project.</p>
      <div class="work-grid oneCol">
        <img src="../assets/helio/wireframe1.png" alt="">
        <img src="../assets/helio/wireframe2.png" alt="">
        <img src="../assets/helio/wireframe3.png" alt="">
        <img src="../assets/helio/wireframe4.png" alt="">
        <img src="../assets/helio/wireframe5.png" alt="">
        <img src="../assets/helio/wireframe6.png" alt="">
        <img src="../assets/helio/wireframe7.png" alt="">
        <img src="../assets/helio/wireframe8.png" alt="">
        <img src="../assets/helio/wireframe9.png" alt="">
        <img src="../assets/helio/wireframe10.png" alt="">
      </div>
    </div>
    <hr>
    <div class="work-section">
      <h1>Final Visuals & Code</h1>
      <p>With our concepts solidified and our designs polished it was finally time to develop. This final stage of the project was all about preparing for development. We decided to break up the project into several smaller feature releases instead of releasing the whole thing at once. So, we figured out how to break the project down into smaller independant pieces, outlined the development time, and setup timelines. After this we got to coding! At the time, we were working on converting most of Helio from Angular.js to Vue.js, and so we had to keep that in mind as we implemented some of these features. We decided to use this as an opportunity to start the framework switch with Workflow. In addition to ideating, designing, and developing Workflow, I was also responsible for studying Vue, and formulating a plan for integrating it with the rest of the Angular application. As of right now, Workflow is still in the process of being implemented. </p>
      <div class="work-grid oneCol">
        <img src="../assets/helio/visual1.png" alt="">
        <img src="../assets/helio/visual2.png" alt="">
        <img src="../assets/helio/visual3.png" alt="">
        <img src="../assets/helio/visual4.png" alt="">
      </div>
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

hr {
  width: 80vw;
  margin-top: 10vh;
  border: 1px solid #E4E4E4;
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
  }

  div:first-child {
    width: 70%;
    margin-right: 5vw;
  }

  div:nth-child(2) {
    p {
      font-weight: bold;
    }
  }
}

.work-section {
  margin-top: 10vh;
  margin-bottom: 5vh;

  p {
    margin: 0;
    text-align: left;
    width: 100%;
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

    div:first-child {
      width: 100%;
      margin-bottom: 5vh;
    }
  }
}

img {
  width: 100%;
  box-shadow: 10px 10px 37px -15px rgba(133,130,133,1);
}

h1 {
  font-size: 40px;
  margin: 0;
  color: #7160F4;
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