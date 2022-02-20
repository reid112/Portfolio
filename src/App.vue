<script setup>
import LayoutHeader from "@/components/LayoutHeader.vue"
import LayoutFooter from "@/components/LayoutFooter.vue"
import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import ResumeView from "./views/ResumeView.vue"
import PortfolioView from "./views/PortfolioView.vue"
import ContactView from "./views/ContactView.vue"
</script>

<template>
  <div class="flex flex-col h-screen font-primary">
    <LayoutHeader />

    <main class="flex-grow overflow-y-scroll md:ml-60 xl:ml-80 scroll-smooth">
      <HomeView />
      <AboutView />
      <ResumeView />
      <PortfolioView />
      <ContactView />
      <LayoutFooter />
    </main>
  </div>
</template>
