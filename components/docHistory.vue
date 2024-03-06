<template>
      <div class="h-full w-full overflow-scroll no-scrollbar"  v-if="docs">

               
              <div v-if="docs.today.length" class="w-full flex flex-col items-start justify-center mb-3">
                <!-- Time -->
                <h4 v-if="docs.today.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                Today
                </h4>
                <div class="w-full h-fit max-h-40 overflow-scroll no-scrollbar">

                  <div v-if="docs.today.length" class=" w-full flex flex-col gap-x-4" v-for="today in docs.today" :key="today.docId" >
                    <span @click="retrieveDoc(today.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                      {{today.name}}
                    </span>
                  </div>
                </div>
                
              </div>

              <div v-if="docs.yesterday.length" class="w-full flex flex-col items-start justify-center mb-3">
                <!--  -->
                <h4 v-if="docs.yesterday.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                  Yesterday
                </h4>
                <!-- Yesterday -->
                <div class="w-full h-fit max-h-40 overflow-scroll no-scrollbar">
                  <div v-if="docs.yesterday.length" class="w-full flex flex-col gap-x-4" v-for="yesterday in docs.yesterday" :key="yesterday.docId" >
                    <span  @click="retrieveDoc(yesterday.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                      {{yesterday.name}}
                    </span>
                  </div>
                </div>
                
              </div>

              <div v-if="docs.lastWeek.length" class="w-full flex flex-col items-start justify-center mb-3">
                <!--  -->
                <h4 v-if="docs.lastWeek.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                  Previous Week
                </h4>
                <!-- Last Week -->
                <div class="w-full h-fit max-h-40 overflow-scroll no-scrollbar">
                  <div v-if="docs.lastWeek.length" class="w-full flex flex-col gap-x-4" v-for="lastWeek in docs.lastWeek" :key="lastWeek.docId" >
                    <span  @click="retrieveDoc(lastWeek.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                      {{lastWeek.name}}
                    </span>
                  </div>
                </div>
              </div>

              <div v-if="docs.lastMonth.length" class="w-full flex flex-col items-start justify-center mb-3">
                <!--  -->
                <h4 v-if="docs.lastMonth.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                  Previous Month
                </h4>
                <!-- Last Month -->
                <div class="w-full h-fit max-h-40 overflow-scroll no-scrollbar">
                  <div v-if="docs.lastMonth.length" class="w-full flex flex-col gap-x-4" v-for="lastMonth in docs.lastMonth" :key="lastMonth.docId" >
                    <span  @click="retrieveDoc(lastMonth.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                      {{lastMonth.name}}
                    </span>
                  </div>
                </div>
                
              </div>

      </div>


      <div v-else class="w-full bg-white dark:bg-[#12171d] rounded-3xl flex flex-col items-center justify-center space-y-4 lg:space-y-8 py-20 mb-2 lg:mb-0">
                <div class='w-[24%]'>
                    <img
                    src='~/assets/img/docEmpty.svg'
                    class="w-full"
                    alt=""
                    />
                </div>

                <h1
                    class="text-lg w-full text-black dark:text-white cabinet flex flex-col items-center justify-center"
                    >
                    No available history
                    <p  class="text-xs sm:text-xs text-center text-gray-500 cabinet paragraph mx-14 mt-4">
                    Your documents history will be visible after you generate your first resume and cover letter
                    </p>
                </h1>

            
      </div>

  </template>
  <script setup lang="ts">

    const state = useGlobalState()
    const {useSorter} = useDocSort()
    const docs = computed(() => useSorter(state.user.value?.docHistory))

    const router = useRouter()

    const retrieveDoc = (id:string)=>{
      router.push({
          path: '/',
          query: { id: id },
    })
    }
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
 .no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
  </style>