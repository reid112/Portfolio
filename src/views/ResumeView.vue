<script setup>
import PageTitle from '@/components/PageTitle.vue'
import DownloadResumeButton from '@/components/DownloadResumeButton.vue'
import ResumeCard from '@/components/ResumeCard.vue'
import SkillsBar from '@/components/SkillsBar.vue'

const education = [
  {
    time: '2009 - 2012',
    title: 'Bachelor Degree',
    location: 'University of Regina',
    description: 'Graduated with a degree in Computed Science.  Also took the coop program which allowed me to get real life work experience while going to school.'
  },
  {
    time: '2009 - 2012',
    title: 'Bachelor Degree',
    location: 'University of Regina',
    description: 'Graduated with a degree in Computed Science.  Also took the coop program which allowed me to get real life work experience while going to school.'
  },
  {
    time: '2009 - 2012',
    title: 'Bachelor Degree',
    location: 'University of Regina',
    description: 'Graduated with a degree in Computed Science.  Also took the coop program which allowed me to get real life work experience while going to school.'
  },
  {
    time: '2009 - 2012',
    title: 'Bachelor Degree',
    location: 'University of Regina',
    description: 'Graduated with a degree in Computed Science.  Also took the coop program which allowed me to get real life work experience while going to school.'
  }
]

const experience = [
  {
    time: '2012 - current',
    title: 'Web Developer',
    location: 'GasBuddy',
    description: 'Some text here about what I did in this role.'
  },
  {
    time: '2012 - current',
    title: 'Web Developer',
    location: 'GasBuddy',
    description: 'Some text here about what I did in this role.'
  }
]

const skills = [
  {
    title: 'Kotlin',
    value: '75'
  },
  {
    title: 'Android SDK',
    value: '80'
  },
  {
    title: 'HTML/CSS',
    value: '90'
  },
  {
    title: 'Javascript',
    value: '80'
  },
  {
    title: 'Vue JS',
    value: '80'
  },
  {
    title: 'Tailwind',
    value: '85'
  },
  {
    title: 'Docker',
    value: '65'
  },
]
</script>

<template>
  <section class="px-4 pb-24 bg-zinc-100">
    <div class="container mx-auto">
      <PageTitle
        background-title="Summary"
        foreground-title="Resume"
      />

      <h2 class="text-2xl font-bold text-zinc-800">
        My Education
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <ResumeCard
          v-for="item in education"
          :key="item.title"
          :time="item.time"
          :title="item.title"
          :location="item.location"
          :description="item.description"
        />
      </div>

      <h2 class="mt-12 text-2xl font-bold text-zinc-800">
        My Experience
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <ResumeCard
          v-for="item in experience"
          :key="item.title"
          :time="item.time"
          :title="item.title"
          :location="item.location"
          :description="item.description"
        />
      </div>

      <h2 class="mt-12 text-2xl font-bold text-zinc-800">
        My Skills
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <SkillsBar
          v-for="skill in skills"
          :key="skill.title"
          :title="skill.title"
          :value="skill.value"
        />
      </div>

      <div class="mt-24 text-center">
        <DownloadResumeButton />
      </div>
    </div>
  </section>
</template>
