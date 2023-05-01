<template>
  <div
    class="flex flex-col w-full min-h-screen justify-center items-center space-y-20 py-24"
  >
    <div
      class="flex flex-col text-center justify-center space-y-3 text-gray-900 dark:text-white"
    >
      <h1 class="h-12 text-5xl md:h-auto md:text-8xl font-bold text-gray-800 dark:text-white">
        <VueWriter
          :array="title"
          :erase-speed="50"
          :type-speed="70"
          :delay="1000"
        />
      </h1>
    </div>

    <div class="flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0">
      <router-link to="/en">
        <main-button
          color="red"
          title="english"
        />
      </router-link>
      <router-link to="/id">
        <main-button
          color="yellow"
          title="indonesia"
        />
      </router-link>
      <router-link to="/su">
        <main-button
          color="green"
          title="sundanese"
        />
      </router-link>
    </div>
    <div class="flex flex-col items-center space-y-20">
      <div
        class="flex flex-col text-gray-800 dark:text-white text-xs font-bold space-y-2"
      >
        <div class="flex items-center space-x-3">
          <div class="w-4 h-4 bg-red-600 rounded-full" />
          <p>BACK</p>
        </div>
        <div class="flex items-center space-x-3">
          <div class="w-4 h-4 bg-yellow-600 rounded-full" />
          <p>SPEAK JOKE</p>
        </div>
        <div class="flex items-center space-x-3">
          <div class="w-4 h-4 bg-green-600 rounded-full" />
          <p>GENERATE</p>
        </div>
      </div>

      <p class="dark:text-gray-500 text-xs italic">
        by
        <a
          class="underline"
          href="https://github.com/amyar32"
          target="_blank"
        >amyar</a>
        and
        <a
          class="underline"
          href="https://icanhazdadjoke.com"
          target="_blank"
        >brett</a>
        for english api
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueWriter from 'vue-writer';
import MainButton from '../components/ui/MainButton.vue';

const title = ref(['DAD JOKES', 'JOKES BAPAK', 'TATAR UCINGAN']);
</script>
