<script setup>
defineProps({
  backgroundTitle: {
    type: String,
    default: ''
  },
  foregroundTitle: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <div class="relative py-20">
    <div class="relative flex items-center justify-center w-full">
      <div class="absolute flex items-center justify-center">
        <span class="text-6xl font-bold tracking-widest text-gray-200 uppercase opacity-70">
          {{ backgroundTitle }}
        </span>
        <span class="absolute bottom-0 w-24 h-1 bg-blue-400 rounded-full" />
      </div>
      <div class="text-3xl font-extrabold">
        {{ foregroundTitle }}
      </div>
    </div>
  </div>
</template>