<template>
    <div class="h-[55vh] rounded-3xl flex flex-col items-center justify-center bg-[#0b1015] pt-10 px-8">
         
      <!-- <svg @click="$emit('cancel')" class="cursor-pointer mr-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><g transform="translate(0 32) scale(1 -1)"><path fill="white" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="white" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></g></svg> -->

          <div class="w-60 h-full gap-x-2 flex overflow-x-scroll">

            <div class="w-fit h-fit flex-none flex flex-col items-center">
              <img src="~/assets/img/basicResume.png" class="w-40 cursor-pointer p-1 rounded-lg border border-white mx-2" />
              <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
                Default
              </p>
            </div>

            <div class="w-fit h-fit flex-none flex flex-col items-center">
              <img src="~/assets/img/template2.svg" class="w-40 cursor-pointer p-1 rounded-lg border border-white mx-2" />
              <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
                Paid
              </p>
            </div>

            <div class="w-fit h-fit flex-none flex flex-col items-center">
              <img src="~/assets/img/template3.svg" class="w-40 cursor-pointer p-1 rounded-lg border border-white mx-2" />
              <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
                Paid
              </p>
            </div>

            <div class="w-fit h-fit flex-none flex flex-col items-center">
              <img src="~/assets/img/template4.png" class="w-40 cursor-pointer p-1 rounded-lg border border-white mx-2" />
              <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
                Paid
              </p>
            </div>

            
            
          </div>

          <h1 class="blackCabinet text-xl py-6 sm:text-2xl text-white font-bold">
            Pick a template
          </h1>

          <!-- <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
            Upload resume or enter details manually
          </p> -->
          <!-- <div ref="pdfSection">
            <ContentRender :markdownString="state.chatResponse.value" />
            <h2 class="text-black">Jobroutes</h2>
          </div> -->

          <!-- <div class=" w-full flex gap-x-12">

            <div class="w-[30%]">
              <BaseButton  @click="$emit('closeDownloadDialog')" class="bg-black">
                <span class="text-[16px] text-white hover:text-gray-200 text-center">Cancel</span>
              </BaseButton>
            </div>


            <BaseButton  @click="exportToPDF('my-pdf-file.pdf', pdfSection as HTMLElement,undefined,{html2canvas: {scale: 0.7, useCORS: true},margin:16,autoPaging:'text'})" class="bg-black">
              <span class="text-[16px] text-white hover:text-gray-200 text-center">Download</span>
            </BaseButton>
          </div> -->

        </div>
  </template>

  <script setup lang="ts">
 import { exportToPDF } from '#imports'

 const pdfSection = ref<HTMLElement | null>(null)

 const state = useGlobalState()
  // const props = defineProps<{
  //     data: string;
  // }>()
  
  </script>