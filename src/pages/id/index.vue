<template>
  <jokes-card
    :joke="joke"
    :is-loading="isLoading"
    @fetch-joke="getJoke"
  />
</template>

<script setup>
import { ref } from 'vue';
import JokesCard from '../../components/ui/JokesCard.vue';

const joke = ref('');
const jokeData = ref([
  'Antara besi 50 kg dengan kapas 50 kg pas kalu dijatuhkan di kaki, nanti sakitan mana? Ya sakitan kakinya.',
  'Dia membuat karya, pas jadi hasil karya tersebut diinjak-injak tidak marah, siapa coba? Pembuat sandal.',
  'Hitam, putih, merah, apakah itu? Zebra abis dikerokin.',
  'Telor apa yang sangar? Telor asin, soalnya ada tatonya.',
  'Telor asin takut ama siapa? Ama telor puyuh, sebab tatonya lebih banyak',
  'Kenapa kalo lagi mikir orang suka megang jidatnya? Ya iyalah, masa megang jidat orang lain!',
  'Kenapa kucing selalu menyembunyikan kotorannya dalam pasir? Karena takut diambil kamu!',
  'Sepeda apa yang tidak bisa dicat? Sepeda hilang!',
  'Benda apa yang baru dibeli langsung dibuang? Peti mati.',
  'Apa persamaan antara uang dan rahasia? Sama-sama susah dipegang.',
  'Uang 100 ribu jika dilempar maka akan menjadi? Jadi rebutan.',
  'Kenapa ketika naik taksi kita tidak boleh bayar uang dulu? Karena uang dulu udah tidak laku.',
  'Selain uang benda apa yang sering dicari-cari orang? Benda hilang.',
  'Hewan apa yang bersaudara? Katak Beradik.',
  'Selain bunga desa, bunga apa yang cantik dan hobi masak? Bungatimin dan Bungatemi.',
  'Nyopet apa yang tergolong paling nekat? Nyopet gigi emas.',
  'Negara mana yang memiliki huruf dobel? u ganda (Uganda).',
  'Sabun apa yang paling genit? Sabun colek.',
  'Kuman apa yang paling bersih? Kumandi pakai sabun.',
  'Kalau hitam dibilang bersih, kalau putih dibilang kotor? Papan tulis!',
  'Selalu diam di pojok tapi bisa keliling dunia? Perangko!',
  'Tentara apa yang paling kecil? Tentara Sekutu.',
  'Bebek apa yang jalannya selalu muter ke kiri terus? Bebek dikunci stang.',
  'Ada bebek 10 di kali 2 jadi berapa? 8, soalnya yang 2 lagi maen di kali.',
  'Hewan apa yang bersaudara? Katak beradik.',
  'Kecil, Ijo, kalau disentuh meledak. Apakah itu? Ulet bulu bawa bom.',
  'Kucing apa yang kuno? Kucinggalan Jaman.',
  'Monyet apa yang gak makan pisang? Monyet lagi puasa.',
  'Kalau ayam berkokok, berarti harimau….? Hari mau pagi.',
  'Pintu apa yang walaupun didorong sepuluh orang pun tidak terbuka? Pintu yang ada tulisan ‘TARIK.’',
  'Apa yang bulat, kecil, hitam, jika dipencet keluar orangnya? Bel pintu.',
  'Apa yang ‘Jauh di mata, dekat di hati? Usus.',
  'Rambut putih namanya uban, rambut merah namanya pirang, kalau rambut hijau namanya apa? Rambutan belum mateng.',
  'Jus apa yang turun dari langit? Justru itu yang aku kagak tau..he..he.',
  'Apa bukti wortel baik untuk kesehatan mata? Pernah lihat kelinci pakai kacamata?',
  'Apa bahasa Indianya bumbu dapur? Tumbar miri jahe.',
  'Apa yang badannya hijau, kepalanya merah, jalannya mundur? Obat nyamuk bakar.',
  'Binatang apa yang dekat sama teman-temannya? A crab.',
]);

const isLoading = ref(false);

const getJoke = () => {
  joke.value = jokeData.value[Math.floor(Math.random() * jokeData.value.length)];
};

getJoke();
</script>
