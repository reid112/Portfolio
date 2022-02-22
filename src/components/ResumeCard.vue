<script setup>
defineProps({
  time: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="p-6 border rounded border-zinc-300">
    <div class="inline-block px-2 text-xs leading-6 text-white bg-blue-400 rounded">
      {{ time }}
    </div>
    <h2 class="mt-4 text-xl font-bold text-zinc-800">
      {{ title }}
    </h2>
    <h4 class="text-sm text-rose-700">
      {{ location }}
    </h4>
    <p class="mt-6">
      {{ description }}
    </p>
  </div>
</template>