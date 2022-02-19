<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <p class="text-3xl text-blue-500">Navigation will go here</p>
        </nav>
    </header>

    <main>
        <RouterView />
    </main>

    <footer>
        <p>Footer will go here</p>
    </footer>
</template>
