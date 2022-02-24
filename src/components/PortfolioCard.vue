<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const projectTypeClass = computed(() => {
  switch (props.type) {
    case 'web':
      return 'bg-yellow-500'
    case 'android':
      return 'bg-green-500'
    default:
      return 'bg-blue-500'
  }
})
</script>

<template>
  <a
    :href="props.link"
    :alt="props.title"
    target="_blank"
    class="block max-w-sm mx-auto duration-500 transform bg-center bg-cover shadow-xl cursor-pointer min-h-150 hover:-translate-y-2 group"
    :style="{ backgroundImage: 'url(../../' + imageName + ')' }"
  >
    <div class="flex flex-col flex-wrap h-full px-10 duration-300 transform bg-black bg-opacity-40 pt-96 hover:bg-opacity-75">
      <h1 class="mb-5 text-3xl text-white duration-300 transform translate-y-20 group-hover:translate-y-0">
        {{ props.title }}
      </h1>
      <div
        class="w-16 h-2 mb-5 duration-300 transform translate-y-20 rounded-full group-hover:translate-y-0"
        :class="projectTypeClass"
      />
      <p class="text-xl text-white duration-500 transform opacity-0 group-hover:opacity-80">
        {{ props.description }}
      </p>
    </div>
  </a>
</template>