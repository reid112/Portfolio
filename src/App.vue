<script setup>
import LayoutHeader from "@/components/LayoutHeader.vue"
import LayoutFooter from "@/components/LayoutFooter.vue"
import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import ResumeView from "./views/ResumeView.vue"
import PortfolioView from "./views/PortfolioView.vue"
import ContactView from "./views/ContactView.vue"
import { ref, onMounted } from 'vue'

const activeLink = ref('home')

const home = ref(null)
const about = ref(null)
const resume = ref(null)
const portfolio = ref(null)
const contact = ref(null)

const observer = new IntersectionObserver((entries) => {
	if(entries[0].isIntersecting === true)
		activeLink.value = entries[0].target.id
}, { threshold: [0.1] })

onMounted(() => {
  observer.observe(home.value)
  observer.observe(about.value)
  observer.observe(resume.value)
  observer.observe(portfolio.value)
  observer.observe(contact.value)
})
</script>

<template>
  <div class="flex flex-col h-screen font-primary">
    <LayoutHeader :active-link="activeLink" />

    <main class="flex-grow overflow-y-scroll lg:ml-60 xl:ml-80 scroll-smooth">
      <div id="home" ref="home" class="w-full h-full">
        <HomeView />
      </div>
      <div id="about" ref="about">
        <AboutView />
      </div>
      <div id="resume" ref="resume">
        <ResumeView />
      </div>
      <div id="portfolio" ref="portfolio">
        <PortfolioView />
      </div>
      <div id="contact" ref="contact">
        <ContactView />
      </div>
      <div id="footer">
        <LayoutFooter />
      </div>
    </main>
  </div>
</template>
