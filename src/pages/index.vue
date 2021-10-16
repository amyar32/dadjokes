<template>
  <div
    class="
      flex flex-col
      w-full
      min-h-screen
      justify-center
      items-center
      space-y-20
    "
  >
    <div
      class="
        flex flex-col
        text-center
        justify-center
        space-y-3
        text-gray-900
        dark:text-white
      "
    >
      <h1 class="text-7xl md:text-8xl font-bold text-gray-800 dark:text-white">
        {{ title }}
      </h1>
    </div>

    <div class="flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0">
      <router-link to="/en"
        ><main-button color="red" title="english"></main-button
      ></router-link>
      <router-link to="/id"
        ><main-button color="yellow" title="indonesia"></main-button
      ></router-link>
      <router-link to="/su"
        ><main-button color="green" title="sundanese"></main-button
      ></router-link>
    </div>
    <div class="flex flex-col items-center space-y-20">
      <div
        class="
          flex flex-col
          text-gray-800
          dark:text-white
          text-xs
          font-bold
          space-y-2
        "
      >
        <div class="flex items-center space-x-3">
          <div class="w-4 h-4 bg-red-600 rounded-full"></div>
          <p>BACK</p>
        </div>
        <div class="flex items-center space-x-3">
          <div class="w-4 h-4 bg-yellow-600 rounded-full"></div>
          <p>SPEAK JOKE</p>
        </div>
        <div class="flex items-center space-x-3">
          <div class="w-4 h-4 bg-green-600 rounded-full"></div>
          <p>GENERATE</p>
        </div>
      </div>

      <p class="dark:text-gray-500 text-xs italic">
        by
        <a class="underline" href="https://amyar.me" target="_blank">amyar</a>
        and
        <a class="underline" href="https://icanhazdadjoke.com" target="_blank"
          >brett</a
        >
        for english api
      </p>
    </div>
    <transition
      enter-active-class="transition-all"
      enter-from-class="opacity-0 "
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-500"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0"
      ><popup
        v-if="isOpen"
        color="yellow"
        message="Voices broken on some devices!"
      ></popup
    ></transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MainButton from "../components/ui/MainButton.vue";
import Popup from "../components/ui/Popup.vue";

const isOpen = ref(false);

const title = ref("DAD JOKES");

setTimeout(() => {
  isOpen.value = true;
  setTimeout(() => {
    isOpen.value = false;
  }, 2000);
}, 500);
</script>
