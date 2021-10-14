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
      w-52
      h-20
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
        'bg-purple-600': props.color === 'purple',
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
