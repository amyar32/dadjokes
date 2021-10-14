<template>
  <jokes-card
    :joke="joke"
    :is-loading="isLoading"
    @fetch-joke="getJoke"
  ></jokes-card>
</template>

<script setup>
import { ref, computed } from "vue";
import JokesCard from "../../components/ui/JokesCard.vue";

const joke = ref("");
const jokeData = ref([
  "Antara besi 50 kg dengan kapas 50 kg pas kalu dijatuhkan di kaki, nanti sakitan mana? Ya sakitan kakinya.",
  "Dia membuat karya, pas jadi hasil karya tersebut diinjak-injak tidak marah, siap coba? Pembuat sandal.",
  "Hitam, putih, merah, apakah itu? Zebra abis dikerokin.",
  "Telor apa yang sangar? Telor asin, soalnya ada tatonya.",
  "Telor asin takut ama siapa? Ama telor puyuh, sebab tatonya lebih banyak",
  "Kenapa kalo lagi mikir orang suka megang jidatnya? Ya iyalah, masa megang jidat orang lain!",
  "Kenapa kucing selalu menyembunyikan kotorannya dalam pasir? Karena takut diambil kamu!",
  "Sepeda apa yang tidak bisa dicat? Sepeda hilang!",
  "Benda apa yang baru dibeli langsung dibuang? Peti mati.",
]);

const isLoading = ref(false);

const getJoke = () => {
  joke.value =
    jokeData.value[Math.floor(Math.random() * jokeData.value.length)];
};

getJoke();
</script>
