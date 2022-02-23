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
      <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        <PortfolioCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image-url="project.imageUrl"
          :link="project.link"
          :type="project.type"
        />
      </div>
    </div>
  </section>
</template>
