<template>
  <div
    class="fixed bottom-10 left-10 py-3 px-6 rounded-lg text-white shadow-lg"
    :class="{
      'bg-green-600': props.color === 'green',
      'bg-red-600': props.color === 'red',
      'bg-yellow-600': props.color === 'yellow',
    }"
  >
    {{ props.message }}
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  color: String,
});
</script>
