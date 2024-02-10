<template>

    <div
        class="col-span-12 mt-[20%] sm:mt-2 rounded-2xl outline-none bg-[#f6f6f6] dark:bg-[#0b1015] flex items-center justify-center"
      :value="props.value"
      >

      <div class="overflow-visible flex flex-col items-center justify-center w-full lg:w-1/2 p-4 rounded-2xl bg-white dark:bg-[#12171d] space-y-4">
        <svg @click="$router.back" class="sm:hidden ml-3 mr-auto stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"/><path fill="none" class="stroke-black dark:stroke-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"/></svg>

        <h1 class="cabinetGroteskBlack font-bold text-xl dark:text-white text-left ml-3 mr-auto mb-2">ACCOUNT SETTINGS</h1>

        <div v-if="user" class="relative">
          <img v-if="user.photoUrl" :src="user.photoUrl" class=" w-24 cursor-pointer p-1 rounded-[50px] bg-green-300 sm:mx-2 md:my-1" />
          <svg class="absolute bottom-0 right-4 border rounded-2xl p-1 bg-white hover:bg-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><g fill="#d41616"><path d="M221.66 90.34L192 120l-56-56l29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34" opacity=".2"/><path d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M51.31 160L136 75.31L152.69 92L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188L164 103.31L180.69 120Zm96-96L147.31 64l24-24L216 84.68Z"/></g></svg>
        </div>

        <div class="flex flex-1 flex-col items-center justify-center">
          <span class="text-sm text-[#25a34a] text-left ml-3 mb-2">Change profile picture</span>
          <span class="text-sm lg:text-lg text-[#969ca5] text-left ml-3 mb-2">PNG, JPG or GIF, min. 400px x 400px</span>
        </div>
        

        <form v-if="user" class="w-full space-y-4">
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
            <div v-if="user" class="w-1/2 flex flex-col items-start justify-center ">
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
          <div class="w-full flex flex-col items-start justify-center ">
              <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">What do you do</span>
              <input
                type="text"
                v-model="user.displayName"
                class="cabinet w-full border border-gray-200 dark:border-[#23282d] dark:text-gray-400 text-sm h-full py-3 lg:py-4 px-4 rounded-3xl bg-white dark:bg-[#12171d]"
                placeholder="University of Abuja"
              />
          </div>

          
          <!-- Occupation -->
          <div class="w-full flex flex-col items-start justify-center space-y-3 ">
            <h1 class="cabinetGroteskBlack font-bold text-xl dark:text-white text-left ml-3 mr-auto">PASSWORD</h1>
              <span class="text-sm dark:text-white text-black text-left ml-3 mb-2">Change Password</span>
              <span class="text-sm w-[85%] text-[#555a5c] text-left ml-3 mb-2">Change your password frequently to keep your account secure,especially if you think it has been compromised.</span>

              <button class="extraboldCabinet text-xs lg:text-lg w-1/2 border border-gray-200 dark:border-white hover:bg-gray-300 dark:hover:bg-black bg-[#f6f6f6] dark:bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl p-2.5">
                <span class="text-black dark:text-white">Change Password</span>
              </button>
              
          </div>

          <!-- <button class="extraboldCabinet text-xs lg:text-lg w-full border border-gray-200 dark:border-white hover:bg-gray-300 dark:hover:bg-black bg-black dark:bg-white flex flex-row items-center justify-center rounded-3xl p-2.5">
            <span class="text-white dark:text-black">Save Changes</span>
          </button> -->


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