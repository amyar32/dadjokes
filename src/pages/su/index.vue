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
  "Di restoran aya 3 jelema keur dahar, nu hiji lolong, nu hiji budek, nu hiji deui bisu. Mun beres dahar saha nu mayar? Nu bisu, soalna keur ulang tahun.",
  "Naon sababna Ken Arok kawin jeung Ken Dedes? Soalna eta hirupna jaman baheula, coba mun jaman now, kan bisa kawin jeung Desi Ratnasari.",
  "Aya 3 cakcak, nu dua keur garelut, nu hiji deui nongton hungkul, terus nu keur nonton ujug-ujug murag. Kunaon tah? Soalna pas tepuk tangan poho nyekelan.",
  "Aya 5 cakcak keur ngumpul dina hiji lampu, terus lampuna ujug-ujug pareum, sabaraha cakcak nua aya keneh deukeut lampu? Tinggal 4 cakcak, soalna nu hiji deui indit nyokot senter.",
  "Hewan bersel satu ngaranna teh Amoeba, mun bersel banyak ngaranna naon? Amoeba Demonstrasi.",
  "Aya jelema lahir di tasik, cicing di spanyol, sakola di inggris, nikah di Perancis, gawe di Amerika, maot di jerman, dibere gelar naon tah? Alm.",
  "Mun aya raja maot, anakna jadi naon? Yatim",
  "Isuk-isuk di dapur, beurang di kamar, sore di teras, peuting di dapur, naon tah? Kompor. Keun we da kompor aing, di simpen dimana wae ge moal nanaon.",
  "Manuk-manuk naon anu huruf e na aya tilu? Bango. Sabab aya laguna sang bango e, e, e sang bango.",
  "Kumaha carana ngabedakeun gajah gede jeung gajah leutik? Disaring.",
  "Perusahaan naon anu paling gede? Perusahaan nu ngaproduksi saringan gajah.",
  "Naon sababna oray teu bogaeun suku tapi titinggi sukuna loba? Sabab pas pembagian suku si oray hoream datang.",
  "Mun gajah jadi hayam, kuda jadi hayam, domba jadi hayam, sapi jadi hayam, terus hayam jadi naon? Jadi loba lah selud 🙁",
  "Naon bedana kuda jeung kudra? Mun kuda sukuna opat, mun kudra sukuna oprat.",
  "Yeuh nya, kan sarerea ge apal yen profesor teh cerdas pisan jeung biasana botak hulana, sanajan cerdas, tapi aya hiji hal anu teu bisa dilakukeun nepika ayeuna, naon cing? Nyisir buuk.",
  "Naha anjing ngagonggong? Soalna mun ngagorowok mah jiga maneh.",
  "Cing naon sababna superman buukna ngan hiji nu keriting? Mun keritingna loba mah ngaranna Supermie.",
  "Saha awewe pangkuatna sa alam dunya? Nyonya Meneer (berdiri sejak 1948).",
  "Naon bahasa arabna endog? Min Silliti ayyam.",
  "Naon sababna mun hayam kongkorongok panonna sok peureum? Soalna geus apal text-na.",
  "Daun naon anu tengahna bolong? Daunat.",
  "Maneh apal Zainuddin MZ? Cing mun apal eta MZ singkatan tina naon? Memang Zainuddin.",
  "Ari adzan magrib teh keur saha sih? Aya nu apal? Keur Jakarta dan sekitarnya.",
  "Topi naon anu bisa nyanyi? Tophia Latjuba.",
  "Jari naon anu bisa nyanyi? Klingking Park.",
  "Nu jadi sabab Bebek goreng enak naon? Huruf B, coba we huruf B-na piceun, da teu ngeunah.",
  "Naon sababna bangkok mun liwat rel kareta sok luluncatan? Sabab mun muter mah karunya jauheun.",
  "Naha si Inul Daratista jadi penyanyi? Soalna mun jadi bangsawan mah ngaranna jadi Darabiru.",
  "Tengah peuting aya nu bodas kukurilingan deukeut masjid, naon cik? Pa Haji keur neangan sendal.",
  "Pak Asep meuli hayam 5, isukan dipeuncit 2, tinggal sabaraha hayamna? 5, kan dipeuncitna isukan.",
]);

const isLoading = ref(false);

const getJoke = () => {
  joke.value =
    jokeData.value[Math.floor(Math.random() * jokeData.value.length)];
};

getJoke();
</script>
