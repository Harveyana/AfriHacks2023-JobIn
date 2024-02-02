<template>
     <!-- mobile only -->
            <div class="sm:hidden w-full flex flex-row items-start justify-between">
              <div class="flex flex-row justify-center items-center space-x-4">
                <svg class=' cursor-pointer w-5 sm:w-7 stroke-black dark:stroke-[#3e4449] mx-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"/></g></svg>
                <svg class=' cursor-pointer w-5 sm:w-7 stroke-black dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2"/></g></svg>
              </div>

              <div class="flex flex-row justify-center items-center">
                <!-- <svg v-if="expanded == 8" @click="expanded = 25" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                <svg v-if="expanded == 25" @click="expanded = 8" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></g></svg> -->
                <!-- <svg class=' cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M15.748 2.947a2 2 0 0 1 2.828 0l2.475 2.475a2 2 0 0 1 0 2.829L9.158 20.144l-6.38 1.076l1.077-6.38L15.748 2.947Zm-.229 3.057l2.475 2.475l1.643-1.643l-2.475-2.474l-1.643 1.642Zm1.06 3.89l-2.474-2.475l-8.384 8.384l-.503 2.977l2.977-.502l8.385-8.385Z"/></svg> -->
                <svg class=' cursor-pointer w-5 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"/></g></svg>
              </div>
              
            </div>
            <!-- mobile only -->

            <div :class="`w-full h-[${$props.expanse}%] flex flex-row items-start justify-start space-x-1`">
              <img src="~/assets/img/Avatar.svg" class=" w-5 cursor-pointer p-1 rounded-[50px] bg-green-300 sm:mx-2 md:my-1 lg:w-8" />
              <div class="w-full sm:w-[90%] border border-gray-100 dark:border-[#23282d] bg-white dark:bg-[#12171d] rounded-2xl h-full flex flex-col ">
                <textarea
                  v-model="props.data"
                  class="w-full cabinet dark:text-white text-xs lg:text-sm h-full p-3 bg-white dark:bg-[#12171d] resize-none rounded-2xl">
                </textarea>
                <div class="my-2 mx-2 flex flex-row items-center justify-start">
                  <span class="cabinet cursor-pointer text-xs sm:text-sm text-black dark:text-white" data-aos="fade-right" data-aos-once="true">
                    {{props.expanse == 30 ? 'See more':'See less'}}
                  </span>
                  <svg v-if="props.expanse == 30" @click="$emit('seeMore')" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                  <svg v-if="props.expanse == 70" @click="$emit('seeLess')" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></g></svg>
                </div>
              </div>
              <BaseToolTip text="Share Document">
                  <svg class='hidden sm:block mx-2 cursor-pointer w-5 lg:w-7 dark:fill-[#3e4449] stroke-gray-500 hover:stroke-black dark:stroke-[#3e4449] dark:hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"/></g></svg>
              </BaseToolTip>
            </div>
  </template>
<script setup lang="ts">

  // const data = ref('Job Title: Product Designer')
  const props = defineProps<{
    data: string;
    expanse: number;
  }>()
  // const expanded = ref(8)

  </script>
  <style scoped>
  .cabinet {
   font-family: 'cabinetGrotesk', sans-serif;
  }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }
 </style>