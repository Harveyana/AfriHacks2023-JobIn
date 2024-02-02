<template>

    <div
        class="col-span-12 rounded-2xl outline-none bg-[#f6f6f6] dark:bg-[#0b1015] flex items-center justify-center mt-2"
      :value="props.value"
      >

      <div class="h-full flex flex-col items-center justify-center w-full lg:w-1/2 p-4 rounded-2xl bg-white dark:bg-[#12171d] space-y-4">
        <h1 class="cabinetGroteskBlack font-bold text-xl dark:text-white text-left ml-3 mr-auto mb-2">PROFILE</h1>

        <div>
          <img v-if="user.photoUrl" :src="user.photoUrl" class=" w-24 cursor-pointer p-1 rounded-[50px] bg-green-300 sm:mx-2 md:my-1" />
        </div>

        <form class="w-full space-y-4">
          <!-- Row 4 -->
          <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
            <!-- First Name -->
            <div v-if="user.displayName" class="w-1/2 flex flex-col items-start justify-center ">
              <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Name</span>
              <input
                type="text"
                v-model="user.displayName"
                class="cabinet w-full border border-gray-200 dark:border-[#23282d] dark:text-gray-400 text-sm h-full py-3 lg:py-4 px-4 rounded-3xl bg-white dark:bg-[#12171d]"
                placeholder="Where was it"
              />
            </div>
            <!-- last Name -->
            <div v-if="user.email" class="w-1/2 flex flex-col items-start justify-center ">
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
          <div v-if="user.userDetails.occupation" class="w-full flex flex-col items-start justify-center ">
              <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">What do you do</span>
              <input
                type="text"
                v-model="user.userDetails.occupation"
                class="cabinet w-full border border-gray-200 dark:border-[#23282d] dark:text-gray-400 text-sm h-full py-3 lg:py-4 px-4 rounded-3xl bg-white dark:bg-[#12171d]"
                placeholder="University of Abuja"
              />
          </div>

          <button class="extraboldCabinet text-xs lg:text-lg w-full border border-gray-200 dark:border-white hover:bg-gray-300 dark:hover:bg-black bg-[#f6f6f6] dark:bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl p-2.5">
            <span class="text-black dark:text-white">Edit profile</span>
          </button>


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