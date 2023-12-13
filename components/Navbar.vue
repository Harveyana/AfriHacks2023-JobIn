<template>
    <nav id="navbar" class="relative z-5 w-full text-neutral-800 border-2 border-white">
      <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          
        </div>
        <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
          <BaseButton @click="$emit('openForm')" class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#1D3160]">
            Join WaitList
          </BaseButton>
          <BaseButton @click="$emit('openForm')" :class="`px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#0cd3ff] to-[${props.color}] text-white`">
            Get Started
          </BaseButton>
        </div>
      </div>
    </nav>
  </template>
  <script setup lang="ts">

  const open = ref(false)
  const dropdownNavbar = ref(false)

  const props = defineProps<{
      color: string
    }>()

  const dropdownToggler  =()=>{
    dropdownNavbar.value = !dropdownNavbar.value
  }
  </script>
  