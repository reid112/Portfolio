<script setup>
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconMenu from './icons/IconMenu.vue'
import { ref } from 'vue'

const navigationVisible = ref(false)

function toggleNavigation() {
  navigationVisible.value = !navigationVisible.value
}
</script>

<template>
  <header class="sticky top-0 left-0 z-50 h-16 px-4 text-gray-200 bg-gray-700 md:h-screen md:w-40 md:fixed">
    <!-- Mobile Header -->
    <div class="flex items-center justify-between h-full md:hidden">
      <h2 class="text-xl font-bold tracking-wider">
        Riley Reid
      </h2>
      <div class="flex items-center">
        <a
          class="ml-4"
          href="https://github.com/reid112"
          target="_blank"
        >
          <IconGithub class="w-4 h-4" />
        </a>
        <a
          class="ml-4"
          href="https://www.linkedin.com/in/riley-reid-89784b66/"
          target="_blank"
        >
          <IconLinkedin class="w-4 h-4" />
        </a>
        <div
          class="ml-12"
          @click="toggleNavigation"
        >
          <IconMenu class="w-6 h-6" />
        </div>
      </div>
    </div>

    <nav
      class="fixed top-0 bottom-0 flex flex-col items-center justify-between w-full py-10 mt-16 transition-all duration-300 bg-gray-700 md:mt-0 md:left-0 md:w-80"
      :class="navigationVisible ? 'left-0' : '-left-full'"
    >
      <!-- Image/Name -->
      <div class="hidden md:flex md:flex-col md:items-center">
        <img
          class="object-cover w-48 h-48 border-8 rounded-full border-zinc-600 full"
          src="../assets/Riley.jpg"
          alt="Riley Reid"
        >
        <h2 class="mt-2 text-2xl font-bold tracking-wider">
          Riley Reid
        </h2>
      </div>

      <!-- Links -->
      <div class="w-full">
        <ul class="text-lg tracking-wider text-center">
          <li>
            <a
              class="block py-2"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              class="block py-2"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              class="block py-2"
              href="#resume"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              class="block py-2"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              class="block py-2"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <!-- Socials -->
      <div class="justify-center hidden h-6 space-x-8 text-white md:flex">
        <a
          href="https://github.com/reid112"
          target="_blank"
        >
          <IconGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/riley-reid-89784b66/"
          target="_blank"
        >
          <IconLinkedin />
        </a>
      </div>
    </nav>
  </header>
</template>
