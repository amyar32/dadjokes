<template>
  <div
    class="
      flex flex-col
      w-full
      min-h-screen
      justify-center
      items-center
      space-y-24
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
      <h1
        class="
          text-7xl
          md:text-9xl
          font-black
          text-transparent
          bg-clip-text bg-gradient-to-br
          from-red-600
          to-purple-600
        "
      >
        DADJOKES
      </h1>
      <p class="dark:text-gray-500 italic">
        by <a href="https://amyar.me" target="_blank">amyar</a> and
        <a href="https://icanhazdadjoke.com" target="_blank">brett api</a>
      </p>
    </div>

    <div class="flex space-x-6">
      <router-link to="/en"
        ><main-button color="red" title="english"></main-button
      ></router-link>
      <router-link to="/id"
        ><main-button color="purple" title="indonesia"></main-button
      ></router-link>
    </div>
  </div>
</template>

<script setup>
import MainButton from "../components/ui/MainButton.vue";
</script>
