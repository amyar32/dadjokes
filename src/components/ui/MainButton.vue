<template>
  <div
    class="
      relative
      transition-all
      cursor-pointer
      group
      flex
      items-center
      justify-between
      flex-col
      bg-white
      dark:bg-gray-800
      w-56
      h-16
      sm:w-44 sm:h-20
      md:w-56
      hover:shadow-lg hover:bg-gray-200
      dark:hover:bg-gray-700
    "
  >
    <div
      v-if="descriptionMode"
      class="
        transition-all
        flex
        justify-center
        absolute
        w-9
        h-9
        bg-white
        dark:bg-gray-800
        border-4 border-gray-100
        dark:border-gray-900
        rounded-full
        -top-5
        font-bold
        text-xl text-gray-800
        dark:text-white
        hover:shadow-lg hover:bg-gray-200
        dark:hover:bg-gray-700
      "
    >
      <p>!</p>
    </div>
    <div
      class="
        flex
        h-full
        items-center
        font-semibold
        text-gray-800
        dark:text-white
        text-xl
      "
    >
      {{ props.title.toUpperCase() }}
    </div>
    <div
      class="transition-all h-2 w-full group-hover:h-3"
      :class="{
        'bg-red-600': props.color === 'red',
        'bg-yellow-600': props.color === 'yellow',
        'bg-green-600': props.color === 'green',
      }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: String,
  title: String,
  descriptionMode: Boolean,
});
</script>
