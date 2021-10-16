<template>
  <div :class="{ dark: isDarkMode }">
    <background-base>
      <router-view v-slot="slotProps">
        <transition
          enter-active-class="transition-all"
          enter-from-class="opacity-0 "
          enter-to-class="opacity-100"
          leave-active-class="transition-all"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
      <dark-mode-toggler @click="toggleDarkMode"></dark-mode-toggler>
    </background-base>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BackgroundBase from "./components/ui/BackgroundBase.vue";
import DarkModeToggler from "./components/ui/DarkModeToggler.vue";

const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
}
</script>
