<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <p class="font-bold text-zinc-800 dark:text-zinc-100">
        {{ title }}
      </p>
      <p class="font-bold text-zinc-800 dark:text-zinc-100">
        {{ value }}%
      </p>
    </div>
    <div class="h-2 rounded-full bg-slate-300">
      <div
        class="h-full bg-blue-400 rounded-l-full"
        :style="{width: value + '%'}"
      />
    </div>
  </div>
</template>