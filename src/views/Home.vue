<template>
    <main class="global-padding">
      <Hero />
      <About />
      <Clients />
      <Work />
      <Work2 />
      <Contact />
    </main>
</template>

<script>
import Hero from "../components/Hero.vue" ;
import About from "../components/About.vue" ;
import Clients from "../components/Clients.vue" ;
import Work from "../components/Work.vue" ;
import Work2 from "../components/Work2.vue" ;
import Contact from "../components/Contact.vue" ;

export default {
  components: {
    Hero,
    About,
    Clients,
    Work,
    Work2,
    Contact
  }
}
</script>>