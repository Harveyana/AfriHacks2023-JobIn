<template>

    <div
        class="col-span-12 mt-[20%] sm:mt-2 overflow-scroll rounded-2xl outline-none bg-[#f6f6f6] dark:bg-[#0b1015] flex flex-col lg:flex-row items-start justify-between"
      :value="props.value"
      >

        <div class="flex flex-col lg:flex-row items-start justify-between w-full lg:w-[75%] rounded-2xl bg-white dark:bg-[#12171d] sm:space-x-2">
          <svg @click="$router.back" class="sm:hidden mt-3 ml-5 mr-auto stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"/><path fill="none" class="stroke-black dark:stroke-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"/></svg>

          <div class="w-full lg:w-[30%] h-fit space-y-4 lg:space-y-4 lg:h-full p-5 sm:p-6 bg-white dark:bg-[#12171d] flex flex-col items-start justify-between rounded-2xl">

              <span class="text-sm lg:text-lg text-[#969ca5] text-left ml-3 mb-2">CURRENT PLAN</span>
              <img
                
                src='~/assets/img/tag2.svg'
                class="w-14 mb-2"
                alt=""
              />

              <div class="flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl text-black dark:text-white extraboldCabinet"
                >
                  Newbie
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
                  Best bet to find entry-level roles
                </p>
              </div>

              <h1 class="text-lg extraboldCabinet"
                >
                <span class="text-sm cabinet text-gray-500 paragraph mx-1">5 resumes/cover letters daily</span>
              </h1>

              <!-- <div class="flex flex-col space-y-2">
                <h1 class="text-xl extraboldCabinet "
                  >
                  4,000 NGN <span class="text-sm  cabinet text-gray-500 paragraph">/ week(save up to 35%)</span>
                </h1>

                <h1 class="text-xl text-gray-500 line-through extraboldCabinet "
                  >
                  6,000 NGN
                </h1>
              </div> -->
              

              <baseButton
               class="border-2 hover:bg-black hover:text-white mt-3 border-black w-full px-6 py-2 my-9 lg:my-12 bg-white text-black flex items-center justify-center"
              >
                <span>Active</span>
              </baseButton>

          </div>


          <div class="my-5 overflow-visible lg:border-l-2 flex flex-col items-center justify-center w-full lg:w-[70%] p-4 bg-white dark:bg-[#12171d]">
            <h1 class="cabinetGroteskBlack font-bold text-xl dark:text-white text-left ml-3 mr-auto">SUBSCRIPTION HISTORY</h1>

            <!-- Table Container -->
            <div  class="h-full p-4 rounded-2xl bg-white dark:bg-[#12171d] overflow-y-scroll w-full">
        
                <!-- Heading Row -->
                <div class="hidden bg-gray-200 dark:bg-[#0b1015] w-full sm:p-2 border-b border-gray-100 dark:border-[#23282d] sm:grid grid-cols-12 gap-2 sm:gap-x-4  dark:text-white text-black">
                    <span class="py-1 sm:py-0 col-span-9 sm:col-span-3 text-xs sm:text-sm  extraboldCabinet">
                        Date
                    </span>

                    <span class="py-1 sm:py-0 col-span-3 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet">
                        Plan
                    </span>

                    <span class="py-1 sm:py-0 col-span-4 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet">
                        Amount
                    </span>

                    <span class="py-1 sm:py-0 col-span-4 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet">
                        Status
                    </span>

                </div>

                <!-- Data Row -->
                <div class="row bg-white hover:bg-gray-200 cursor-pointer dark:hover:bg-[#0b1015] dark:bg-[#12171d] border-b border-gray-100 dark:border-[#23282d] w-full py-1 sm:p-2 grid grid-cols-12 gap-2 sm:gap-x-4">
                    <span class=" truncate col-span-8 sm:col-span-3 text-sm sm:text-sm  extraboldCabinet text-[#2E2E2E] dark:text-white flex items-center justify-start">
                      2023-11-15 13:30
                    </span>

                    <span class=" text-center sm:text-left truncate pt-[2px] sm:py-0 col-span-3 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white flex items-center justify-start">
                      Enterprise
                    </span>

                    <span class="sm:py-0 col-span-9 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white flex items-center justify-start">
                      $250.00
                    </span>

                    <span class="sm:py-0 col-span-9 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                      <div class="extraboldCabinet text-xs w-full dark:border-white hover:bg-gray-300 dark:hover:bg-black bg-green-600  flex flex-1 items-center justify-center rounded-3xl p-1.5">
                        <span class="text-black dark:text-white">Successful</span>
                      </div>
                    </span>

                </div>

                <div class="row bg-white hover:bg-gray-200 cursor-pointer dark:hover:bg-[#0b1015] dark:bg-[#12171d] border-b border-gray-100 dark:border-[#23282d] w-full py-1 sm:p-2 grid grid-cols-12 gap-2 sm:gap-x-4">
                    <span class=" truncate col-span-8 sm:col-span-3 text-sm sm:text-sm  extraboldCabinet text-[#2E2E2E] dark:text-white flex items-center justify-start">
                      2023-11-15 13:30
                    </span>

                    <span class=" text-center sm:text-left truncate pt-[2px] sm:py-0 col-span-3 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white flex items-center justify-start">
                      Enterprise
                    </span>

                    <span class="sm:py-0 col-span-9 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white flex items-center justify-start">
                      $250.00
                    </span>

                    <span class="sm:py-0 col-span-9 sm:col-span-3 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                      <div class="extraboldCabinet text-xs w-full dark:border-white hover:bg-gray-300 dark:hover:bg-black bg-green-600  flex flex-1 items-center justify-center rounded-3xl p-1.5">
                        <span class="text-black dark:text-white">Successful</span>
                      </div>
                    </span>

                </div>


            </div>
          </div>


        </div>




        <div class="w-full lg:w-[23%] h-fit space-y-4 lg:space-y-0 lg:h-full p-5 sm:p-3 bg-white dark:bg-[#12171d] flex flex-col items-start justify-between rounded-2xl">

              <span class="text-sm lg:text-lg text-[#969ca5] text-left ml-3 mb-2">OTHER PLANS</span>

              <div class="w-full flex items-center justify-between">
                <svg @click="reversePlan()" class="hover:bg-gray-200 dark:bg-gray-200 rounded-2xl cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m1.78 4.28l-6 6l-.686.72l.687.72l6 6l1.44-1.44L13.937 16l5.28-5.28z"/></svg>
                <svg @click="nextPlan()" class="hover:bg-gray-200 dark:bg-gray-200 rounded-2xl cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m257.37 0l-84.68-84.69a16 16 0 0 1 22.62-22.62l96 96a16 16 0 0 1 0 22.62l-96 96a16 16 0 0 1-22.62-22.62Z"/></svg>              
              </div>

              <NewbiePlan v-if="showPlan == 1"/>
              <MidLevelPlan v-if="showPlan == 2"/>
              <SeniorPlan v-if="showPlan == 3"/>
          

          </div>

      
      

      
                    
                 
    </div>
  </template>

  
  <script setup lang="ts">

  const state = useGlobalState()
  const user = state.user

  const showPlan = ref(1)

  const nextPlan = ()=>{
    if(showPlan.value == 1 || showPlan.value == 2) showPlan.value++
  }

  const reversePlan = ()=>{
    if(showPlan.value == 3 || showPlan.value == 2) showPlan.value--
  }
  
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