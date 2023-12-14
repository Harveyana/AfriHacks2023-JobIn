<template>
     <!-- mobile only -->
            <div class="sm:hidden w-full flex flex-row items-start justify-between">
              <img src="~/assets/img/Avatar.svg" class="w-8 cursor-pointer p-1 rounded-[50px] bg-green-300 mx-2 md:my-1 md:w-8" />

              <div class="flex flex-row justify-center items-center">
                <!-- <svg v-if="expanded == 8" @click="expanded = 25" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                <svg v-if="expanded == 25" @click="expanded = 8" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></g></svg> -->
                <!-- <svg class=' cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M15.748 2.947a2 2 0 0 1 2.828 0l2.475 2.475a2 2 0 0 1 0 2.829L9.158 20.144l-6.38 1.076l1.077-6.38L15.748 2.947Zm-.229 3.057l2.475 2.475l1.643-1.643l-2.475-2.474l-1.643 1.642Zm1.06 3.89l-2.474-2.475l-8.384 8.384l-.503 2.977l2.977-.502l8.385-8.385Z"/></svg> -->
                <svg class=' cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"/></g></svg>
              </div>
              
            </div>
            <!-- mobile only -->

            <div :class="`w-full min-h-[${expanded}rem] flex flex-row items-start justify-start`">
              <img src="~/assets/img/Avatar.svg" class="hidden sm:block w-8 cursor-pointer p-1 rounded-[50px] bg-green-300 mx-2 md:my-1 md:w-8" />
              <div class="w-full sm:w-[90%] border-gray-400 border bg-white dark:bg-[#0b1015] rounded-2xl h-full flex flex-col ">
                <textarea
                  v-model="props.data"
                  class="w-full dark:text-white text-sm h-full p-3 bg-white dark:bg-[#0b1015] resize-none rounded-2xl">
                </textarea>
                <div class="my-2 mx-2 flex flex-row items-center justify-start">
                  <span class="cursor-pointer text-xs sm:text-sm text-black dark:text-white" data-aos="fade-right" data-aos-once="true">
                    {{expanded == 8 ? 'See more':'See less'}}
                  </span>
                  <svg v-if="expanded == 8" @click="expanded = 25" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                  <svg v-if="expanded == 25" @click="expanded = 8" class='mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></g></svg>
                </div>
              </div>
              <svg class='hidden sm:block mx-2 cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"/></g></svg>
            </div>
  </template>
<script setup lang="ts">

  // const data = ref('Job Title: Product Designer')
  const props = defineProps<{
    data: string
  }>()
  const expanded = ref(8)

  </script>