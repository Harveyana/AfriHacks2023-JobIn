<template>
    <div class="row bg-white hover:bg-gray-200 cursor-pointer dark:hover:bg-[#0b1015] dark:bg-[#12171d] border-b border-gray-100 dark:border-[#23282d] w-full py-1 sm:p-4 grid grid-cols-12 gap-2 sm:gap-x-4" v-bind="$attrs">
      <span class=" whitespace-nowrap truncate col-span-8 sm:col-span-4 text-sm sm:text-sm  extraboldCabinet text-[#2E2E2E] dark:text-white">
        {{ props.name }}
      </span>

      <span class=" text-center sm:text-left truncate pt-[2px] sm:py-0 col-span-3 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
        {{props.id}}
      </span>

      <span class="sm:py-0 col-span-9 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
        {{props.date.slice(0,25)}}
      </span>
    </div>
  </template>
  <script setup lang="ts">

    const props = defineProps<{
        name: string;
        id:string;
        date:string
    }>()
  </script>

