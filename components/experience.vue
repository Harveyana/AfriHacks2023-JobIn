<template>
    <div v-for="(experience,index) in $props.experiences" :key="index" class="w-[92%] flex flex-col items-start justify-start border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">
            <div>
              <h1 class="text-sm text-white capitalize cabinet">
                {{experience.title}}, <span class="underline capitalize underline-offset-4">{{experience.company }}</span> 
              </h1>
              <p  class="text-xs sm:text-sm text-gray-500 capitalize cabinet">
                {{experience.location}}
              </p>
              <p  class="text-xs sm:text-sm text-gray-500 cabinet">
                {{ experience.yearStarted}} - {{experience.yearEnded}}
              </p>
            </div>

            <ol v-for="(description,index) in experience.descriptions" :key="index" class="flex flex-col items-center justify-center">
              <li class="text-xs sm:text-sm capitalize text-white cabinet flex flex-row items-start justify-center">
                <svg class="w-10 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="white" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"/></svg>
                <span>{{description}}</span> 
              </li>

            </ol>

            <button @click="emit('delete',index)" class="">
              <span class="text-xs sm:text-sm hover:text-white text-gray-500 cabinet">Delete</span>
            </button>
    </div>
  </template>

  <script setup lang="ts">
  import type { experience } from '../interfaces';

  const emit = defineEmits(['delete'])  // Declare Events

  const props = defineProps<{
      experiences: experience[];
  }>()
  
  </script>
  <style scoped>
  .cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
  }

  .extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
  }

  </style>