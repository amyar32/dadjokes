<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      w-full
      h-screen
      space-y-7
      px-20
    "
  >
    <div
      @click="copy"
      class="
        transition-all
        dark:text-white
        bg-white
        dark:bg-gray-800
        cursor-pointer
        p-4
        rounded-xl
        hover:shadow-lg hover:bg-gray-200
        dark:hover:bg-gray-700
      "
    >
      <div v-if="props.isLoading" class="flex justify-center items-center">
        <div
          class="
            animate-spin
            rounded-full
            h-6
            w-6
            border-b-2 border-gray-900
            dark:border-white
          "
        ></div>
      </div>
      <p v-else>{{ props.joke }}</p>
    </div>
    <div class="flex space-x-5">
      <router-link to="/">
        <div
          class="
            transition-all
            bg-red-500
            hover:bg-red-400
            w-9
            h-9
            cursor-pointer
            rounded-full
            hover:shadow-lg
          "
        ></div
      ></router-link>
      <div
        class="
          transition-all
          bg-yellow-500
          hover:bg-yellow-400
          w-9
          h-9
          cursor-pointer
          rounded-full
          hover:shadow-lg
        "
        @click="speakJoke"
      ></div>
      <div
        class="
          transition-all
          bg-green-500
          hover:bg-green-400
          w-9
          h-9
          cursor-pointer
          rounded-full
          hover:shadow-lg
        "
        @click="fetchJoke"
      ></div>
    </div>
    <transition
      enter-active-class="transition-all"
      enter-from-class="opacity-0 "
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-500"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0"
      ><div
        v-if="isCopied"
        class="
          fixed
          bottom-10
          left-10
          bg-green-600
          py-3
          px-6
          rounded-lg
          text-white
          shadow-lg
        "
      >
        Copied to clipboard!
      </div></transition
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import useClipboard from "vue-clipboard3";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  joke: String,
  isLoading: Boolean,
});
const emit = defineEmits(["fetch-joke"]);

const { toClipboard } = useClipboard();

const isCopied = ref(false);

const fetchJoke = () => {
  emit("fetch-joke");
  synth.cancel();
  toggleIsCopied(false);
};

const toggleIsCopied = async (status) => {
  isCopied.value = status;
};

const copy = async () => {
  try {
    await toClipboard(props.joke);
    isCopied.value = true;
  } catch (e) {
    console.error(e);
  }
};

const synth = window.speechSynthesis;
const voiceList = synth.getVoices();
const speech = new window.SpeechSynthesisUtterance();

function speakJoke() {
  speech.text = props.joke;
  if (route.path === "/en") {
    speech.voice = voiceList[0];
  } else {
    speech.voice = voiceList[3];
  }

  synth.speak(speech);
}
</script>
