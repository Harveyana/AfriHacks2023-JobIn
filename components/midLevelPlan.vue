<template>
    
            <!-- MID LEVEL PLAN -->

          <div class="w-full h-fit space-y-4 lg:space-y-0 lg:h-full p-5 sm:p-3 bg-white dark:bg-[#12171d]  flex flex-col items-start justify-between rounded-2xl">
              <img
                
                src='~/assets/img/tag3.svg'
                class="w-14 mb-2"
                alt=""
              />

              <div class="flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl dark:text-white extraboldCabinet"
                >
                 Mid-Level
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
                  Covers for competitive job offers
                </p>
              </div>

              <h1 class="text-lg extraboldCabinet"
                >
                <span class="text-sm cabinet text-gray-500 paragraph mx-1">Unique resumes/cover letters daily</span>
              </h1>

              <div class="flex flex-col space-y-2">
                <h1 class="text-lg dark:text-white extraboldCabinet "
                  >
                  7,000 NGN <span class="text-sm  cabinet text-gray-500 paragraph">/ month(save up to 45%)</span>
                </h1>

                <h1 class="text-lg text-gray-500 line-through extraboldCabinet "
                  >
                  15,000 NGN
                </h1>
              </div>
              

              <baseButton
               class="border-2 hover:bg-black hover:text-white mt-3 border-black w-full px-6 py-3 my-9 lg:my-12 bg-white text-black flex items-center justify-center"
              >
                <span>Upgrade Plan</span>
              </baseButton>

          </div>


            
  </template>
  <script setup lang="ts">
  
  </script>

  <style scoped>
  h1,.cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }



</style>