<template>

    <div
        class="col-span-12 h-fit mt-[20%] sm:mt-2 overflow-y-scroll rounded-2xl outline-none bg-[#f6f6f6] dark:bg-[#0b1015] flex items-center justify-center"
      :value="props.value"
      >


      <div class="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 rounded-2xl bg-white dark:bg-[#12171d] space-y-4">
        <svg @click="$router.back" class="sm:hidden ml-3 mr-auto stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"/><path fill="none" class="stroke-black dark:stroke-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"/></svg>
        <h1 class="cabinetGroteskBlack font-bold text-xl dark:text-white text-left ml-3 mr-auto mb-2">PROFILE</h1>

        <div v-if="user">
          <img v-if="user.photoUrl" :src="user.photoUrl" class=" w-24 cursor-pointer p-1 rounded-[50px] bg-green-300 sm:mx-2 md:my-1" />
        </div>

        <form class="w-full space-y-4">
          <!-- Row 4 -->
          <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
            <!-- First Name -->
            <div v-if="user" class="w-1/2 flex flex-col items-start justify-center ">
              <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Name</span>
              <input
                type="text"
                v-model="user.displayName"
                class="cabinet w-full border border-gray-200 dark:border-[#23282d] dark:text-gray-400 text-sm h-full py-3 lg:py-4 px-4 rounded-3xl bg-white dark:bg-[#12171d]"
                placeholder="Where was it"
              />
            </div>
            <!-- last Name -->
            <div v-if="user?.email" class="w-1/2 flex flex-col items-start justify-center ">
              <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Email</span>
              <input
                type="text"
                v-model="user.email"
                class="cabinet w-full border border-gray-200 dark:border-[#23282d] dark:text-gray-400 text-sm h-full py-3 lg:py-4 px-4 rounded-3xl bg-white dark:bg-[#12171d]"
                placeholder="https://example.com"
              />
            </div>

          </div>

          <!-- Occupation -->
          <div v-if="user" class="w-full flex flex-col items-start justify-center ">
              <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">What do you do</span>
              <input
                type="text"
                v-model="user.email"
                class="cabinet w-full border border-gray-200 dark:border-[#23282d] dark:text-gray-400 text-sm h-full py-3 lg:py-4 px-4 rounded-3xl bg-white dark:bg-[#12171d]"
                placeholder="University of Abuja"
              />
          </div>

          <div class="w-full flex items-center justify-center space-x-3">
            <button class="extraboldCabinet text-xs lg:text-lg w-1/2 border border-gray-200 dark:border-white hover:bg-gray-300 dark:hover:bg-black bg-[#f6f6f6] dark:bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl p-2.5">
              <span class="text-black dark:text-white">Edit profile</span>
            </button>

            <NuxtLink href="/setup" class="extraboldCabinet text-xs lg:text-lg w-3/4 border border-gray-200 dark:border-white hover:bg-gray-300 dark:hover:bg-black bg-[#f6f6f6] dark:bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl space-x-2 p-2.5">
              <span class="text-black dark:text-white">Edit Info</span>
              <svg class="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 4.13v1.428a.5.5 0 0 0 .725.446l.886-.446l.377-.19L2 5.362l1.404-.708l.07-.036l.662-.333l.603-.304a.5.5 0 0 0 0-.893l-.603-.305l-.662-.333l-.07-.036L2 1.706l-.012-.005l-.377-.19l-.886-.447A.5.5 0 0 0 0 1.51zM7.25 2a.75.75 0 0 0 0 1.5h7a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25h-9.5a.25.25 0 0 1-.25-.25V6.754a.75.75 0 0 0-1.5 0v5.496c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 16 12.25v-8.5A1.75 1.75 0 0 0 14.25 2zm-.5 4a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM6 9.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 6 9.25" clip-rule="evenodd"/></svg>
            </NuxtLink>
          </div>
          


        </form>
      </div>
                    
                 
    </div>
  </template>

  
  <script setup lang="ts">

  const state = useGlobalState()
  const user = state.user
  
  const props = defineProps<{
    value:string
  }>()


  </script>
  <style scoped>
  .cabinet{
    font-family: 'cabinetGrotesk', sans-serif;
  }

  .extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
  }

  .blackCabinet{
    font-family: 'cabinetGroteskBlack', sans-serif;
  }
  </style>