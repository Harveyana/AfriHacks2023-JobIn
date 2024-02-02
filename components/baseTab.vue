<template>
    <NuxtLink :href="props.url" class="cabinet w-fit sm:w-full text-xs text-[#71787b] group bg-white flex flex-row items-center justify-start rounded-xl py-2 px-2 dark:bg-transparent dark:text-[#71787b] hover:bg-[#f3f3f3] dark:hover:bg-[#1e2328] dark:hover:text-white hover:text-black">
      <slot></slot>
    </NuxtLink>
  </template>

  <script setup lang="ts">
  const props = defineProps<{
      url: string
  }>()
  </script>

  <style scoped>
   .cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
  }
  </style>