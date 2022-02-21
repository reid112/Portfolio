<script setup>
import PageTitle from '@/components/PageTitle.vue'
import DownloadResumeButton from '@/components/DownloadResumeButton.vue'
import { computed } from 'vue'

const currentAge = computed(() => {
    var today = new Date()
    var birthDate = new Date("1991/03/20")
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age
})
</script>

<template>
  <div
    id="about"
    class="px-4 pb-24 bg-white "
  >
    <div class="container mx-auto">
      <PageTitle
        background-title="About Me"
        foreground-title="Get To Know Me"
      />
      <div class="lg:flex">
        <div class="space-y-4 text-base text-center text-zinc-800 lg:w-4/6 lg:px-8">
          <h2 class="text-2xl font-bold ">
            I'm <span class="font-bold text-blue-400">Riley Reid,</span> a Canadian Developer
          </h2>
          <p>
            I graduated from the University of Regina with a Computer Science degree
            and have a passion for building things.  I love to build Android applications 
            as well as Web applications. 
          </p>
          <p>
            When I am not writing code, I enjoy being active and being outdoors.  I am a long
            distance runner and ran my first marathon in 2021.  I also enjoy rock climbing, specifically
            bouldering, and mountain biking.
          </p>
        </div>
        <div class="lg:w-2/6 lg:px-8">
          <div class="mt-16 text-base divide-y lg:mt-0 text-zinc-800">
            <p class="py-2">
              <span class="mr-2 font-bold">Name:</span> Riley Reid
            </p>
            <p class="py-2">
              <span class="mr-2 font-bold">Email:</span> r.reid.112@gmail.com
            </p>
            <p class="py-2">
              <span class="mr-2 font-bold">Age:</span> {{ currentAge }}
            </p>
            <p class="py-2">
              <span class="mr-2 font-bold">From:</span> Regina, SK
            </p>
          </div>
          <div class="mt-6">
            <DownloadResumeButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
