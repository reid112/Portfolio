<script setup>
import PageTitle from '@/components/PageTitle.vue'
import PortfolioCard from '@/components/PortfolioCard.vue'
import { projects } from '@/helpers/data.js'
</script>

<template>
  <section class="px-4 pb-24 bg-white">
    <div class="container mx-auto">
      <PageTitle
        background-title="Portfolio"
        foreground-title="My Work"
      />
      <div class="flex flex-wrap items-center mt-4">
        <PortfolioCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :image-name="project.imageName"
          :link="project.link"
          :type="project.type"
        />
      </div>
    </div>
  </section>
</template>
