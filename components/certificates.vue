<template>
    <div v-for="(certificate,index) in $props.certifications" :key="index" class="w-[92%] flex flex-col items-start justify-start border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">
            <div>
              <h1 class="text-sm text-white capitalize cabinet">
                {{certificate.name}}, <span class="underline capitalize underline-offset-4"> from {{certificate.organisation}}</span> 
              </h1>
              <p  class="text-xs sm:text-sm text-gray-500 capitalize cabinet">
                {{certificate.yearIssued}} - {{ certificate.yearExpires }}
              </p>
              <p  class="text-xs sm:text-sm text-gray-500 cabinet">
                {{ certificate.description}}
              </p>
            </div>

            <button @click="emit('delete',index)" class="">
              <span class="text-xs sm:text-sm hover:text-white text-gray-500 cabinet">Delete</span>
            </button>
    </div>
  </template>

  <script setup lang="ts">
  
  import type { certificate } from '../interfaces';

  const emit = defineEmits(['delete'])  // Declare Events

  const props = defineProps<{
      certifications: certificate[];
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