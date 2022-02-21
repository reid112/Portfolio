<template>
  <div
    id="home"
    class="w-full h-full"
  >
    <div class="z-10 flex flex-col items-center justify-center w-full h-full text-center text-gray-200">
      <p class="text-2xl font-bold lg:text-4xl">
        Hello
      </p>
      <p class="mt-4 text-6xl font-bold lg:text-7xl">
        I'm Riley Reid
      </p>
      <p class="mt-4 text-2xl">
        based in Regina, Saskatchewan.
      </p>
      <button class="px-6 py-2 mt-8 overflow-hidden border-2 border-blue-400 rounded-full hover:bg-blue-300 hover:text-gray-700">
        Contact Me
      </button>
    </div>

    <div class="absolute inset-0 z-0 w-full h-full">
      <img
        class="object-cover w-full h-full"
        src="../assets/Hero.jpg"
      >
      <div class="absolute inset-0 bg-black bg-opacity-80" />
    </div>
  </div>
</template>
