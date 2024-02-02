<template>
    <div v-for="(contact,index) in $props.contacts" :key="index" class="w-[92%] flex flex-col items-start justify-start border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">
            <div>
              <h1 class="text-sm text-white capitalize cabinet">
                {{contact.type}} 
              </h1>
              
              <p  class="text-xs sm:text-sm text-gray-500 cabinet">
                {{contact.value}}
              </p>
            </div>

            <button @click="emit('delete',index)" class="">
              <span class="text-xs sm:text-sm hover:text-white text-gray-500 cabinet">Delete</span>
            </button>
    </div>
  </template>

  <script setup lang="ts">
  
  import type { contact } from '../interfaces';

  const emit = defineEmits(['delete'])  // Declare Events

  const props = defineProps<{
      contacts: contact[];
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