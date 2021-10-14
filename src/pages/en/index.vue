<template>
  <jokes-card
    :joke="joke"
    :is-loading="isLoading"
    @fetch-joke="getJoke"
  ></jokes-card>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import JokesCard from "../../components/ui/JokesCard.vue";

const joke = ref("");
const isLoading = ref(false);

const getJoke = async () => {
  isLoading.value = true;
  await axios
    .get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((data) => {
      joke.value = data.data.joke;
    })
    .finally(() => {
      isLoading.value = false;
    });
};

getJoke();
</script>
