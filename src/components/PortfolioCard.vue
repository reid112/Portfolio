<script setup>

const props = defineProps({
  title: {
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
</script>

<template>
  <a
    :href="props.link"
    :alt="props.title"
    target="_blank"
    class="block h-48 mx-auto my-2 duration-500 transform bg-center bg-cover shadow-xl cursor-pointer w-96 hover:-translate-y-2 group"
    :style="{ backgroundImage: 'url(../../' + imageName + ')' }"
  >
    <div class="flex flex-col items-center justify-center h-full px-10 duration-300 transform bg-black bg-opacity-40 hover:bg-opacity-75">
      <h1 class="text-xl font-bold text-white duration-500 transform opacity-0 group-hover:opacity-90">
        {{ props.title }}
      </h1>
      <h4 class="text-base text-white duration-500 transform opacity-0 group-hover:opacity-90">
        {{ props.type }}
      </h4>
    </div>
  </a>
</template>