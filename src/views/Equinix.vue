<template>
  <section class="global-section">
    <h1>Equinix Edge Services</h1>
    <h2>UX Design, Product Design, User Research</h2>
    <p>Equinix is the world's largest digital infrastructure company. They specialize in internet connection, data centers, and cloud computing. At ZURB I was the sole designer on a small team working to rethink and redesign the company's Edge Services platform, which sought to provide services for cloud computing engineers to launch and manage their data management systems.</p>
    <img class="project-hero" src="../assets/equinix/equinixheader.png" alt="">
    <div class="overview-info">
      <div>
        <h1>Overview</h1>
        <p>During my time at ZURB as a product designer, I led a project to completely re-invision Equinix's Edge Services platform. This project intended to, from the ground up, re-think and re-design the entire philosophy behind the platform. As a team we worked closely with Equinix engineers, designers, and executives to better showcase to the world the services that Equinix was offering.<br><br>This design re-invention was a 4-fold endeavor. We took a look at 3 of the individual services offered in the Edge Services platform (Edge Metal, Identity and Authorization Management, and MilleniumDB) and the Edge Services Ordering Platform, which served as a portal page to purchase and navigate from.</p>
      </div>
      <div>
        <h1>Role</h1>
        <p>Product Designer</p>
      </div>
    </div>
     <hr>
    <div class="work-section">
      <h1>Sketches</h1>
      <p>At the beginning of an exploratory project, everything is pretty vague. Before I did any designing, any coding, any *anything*, I had to define what it is I was actually trying to do! I did this through several rounds of sketches, and discussions around those sketches. I started with more abstract sketches that represented broad ideas of what Edge Services could be. These included small UI elements, isolated interactions, and illustrations that could be a springboard for discussion. Once the team started to gain alignment around some of the core ideas, I began to move the sketches into higher fidelity to illustrate how they would look within the context of the platform. Finally, after multiple meetings, passionate discussions, and a LOT of sketching, I moved into Sketch to do some wireframes.</p>
      <div class="work-grid">
        <img src="../assets/equinix/equinixsketch1.png" alt="">
        <img src="../assets/equinix/equinixsketch2.png" alt="">
        <img src="../assets/equinix/equinixsketch3.png" alt="">
        <img src="../assets/equinix/equinixsketch4.png" alt="">
        <img src="../assets/equinix/equinixsketch5.png" alt="">
        <img src="../assets/equinix/equinixsketch6.png" alt="">
      </div>
    </div>
    <hr>
      <div class="work-section">
      <h1>Wireframes and Final Visuals</h1>
      <p>Moving into wireframes for this project was an interesting challenge, as we had structured it as 4 mini projects. Wireframes were done one platform at a time, starting with Edge Metal, but had to be informed by each prior platform. Due to this unique setup we ended up doing rapid wireframing for each platform, followed by multiple rounds of iteration on visuals.</p>
      <div class="work-grid oneCol">
        <img src="../assets/equinix/equinixwireframe1.png" alt="">
        <img src="../assets/equinix/equinixwireframe2.png" alt="">
        <img src="../assets/equinix/equinixwireframe3.png" alt="">
        <img src="../assets/equinix/equinixwireframe4.png" alt="">
        <img src="../assets/equinix/equinixwireframe5.png" alt="">
        <img src="../assets/equinix/equinixwireframe6.png" alt="">
        <img src="../assets/equinix/equinixwireframe7.png" alt="">
        <img src="../assets/equinix/equinixwireframe8.png" alt="">
        <img src="../assets/equinix/equinixwireframe9.png" alt="">
        <img src="../assets/equinix/equinixwireframe10.png" alt="">
        <img src="../assets/equinix/equinixwireframe11.png" alt="">
        <img src="../assets/equinix/equinixwireframe12.png" alt="">
        <img src="../assets/equinix/equinixwireframe13.png" alt="">
        <img src="../assets/equinix/equinixwireframe14.png" alt="">
        <img src="../assets/equinix/equinixwireframe15.png" alt="">
        <img src="../assets/equinix/equinixwireframe16.png" alt="">
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
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    text-align: center;
    width: 70%;
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