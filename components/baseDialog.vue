<template>

    <Dialog
      v-model:visible="props.visible"
      :closable="false"
      :closeOnEscape="true"
      :dismissableMask="true"
      :showHeader="false"
      modal
      :pt="{
          mask: {
              style: 'backdrop-filter: blur(10px)'
          },
          root:{
            class:'mx-2 sm:mx-0 cabinet rounded-3xl shadow-[0_2px_10px] shadow-black transition ease-in-out duration-300'
          },
          content:{
              class:'w-full h-full rounded-3xl'
          },
      }"
      >
        <slot></slot>
              

    </Dialog> 
      
  </template>

  <script setup lang="ts">
  const props = defineProps<{
      visible: boolean
  }>()
  </script>

  <style scoped>
   .cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
  }
  </style>