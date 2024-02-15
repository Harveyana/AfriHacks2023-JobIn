<template>
    <div class="h-full w-full "  v-if="docs">
              <div class="w-full flex flex-col items-start justify-center mb-3">
                <!-- Time -->
                <h4 v-if="docs.today.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                Today
                </h4>
                <div v-if="docs.today.length" class="w-full flex flex-col gap-x-4" v-for="today in docs.today" :key="today.docId" >
                  <span @click="retrieveDoc(today.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                    {{today.name}}
                  </span>
                </div>
                
              </div>

              <div class="w-full flex flex-col items-start justify-center mb-3">
                <!--  -->
                <h4 v-if="docs.yesterday.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                  Yesterday
                </h4>
                <!-- Yesterday -->
                <div v-if="docs.yesterday.length" class="w-full flex flex-col gap-x-4" v-for="yesterday in docs.yesterday" :key="yesterday.docId" >
                  <span  @click="retrieveDoc(yesterday.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                    {{yesterday.name}}
                  </span>
                </div>
              </div>

              <div class="w-full flex flex-col items-start justify-center mb-3">
                <!--  -->
                <h4 v-if="docs.lastWeek.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                  Previous Week
                </h4>
                <!-- Last Week -->
                <div v-if="docs.lastWeek.length" class="w-full flex flex-col gap-x-4" v-for="lastWeek in docs.lastWeek" :key="lastWeek.docId" >
                  <span  @click="retrieveDoc(lastWeek.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                    {{lastWeek.name}}
                  </span>
                </div>
              </div>

              <div class="w-full flex flex-col items-start justify-center mb-3">
                <!--  -->
                <h4 v-if="docs.lastMonth.length" class="cabinet font-semiBold text-xs sm:text-sm text-[#959a9c]" data-aos="fade-right" data-aos-once="true">
                  Previous Month
                </h4>
                <!-- Last Month -->
                <div v-if="docs.lastMonth.length" class="w-full flex flex-col gap-x-4" v-for="lastMonth in docs.lastMonth" :key="lastMonth.docId" >
                  <span  @click="retrieveDoc(lastMonth.docId)" class="cabinet cursor-pointer w-full whitespace-nowrap truncate overflow-hidden rounded-2xl text-[12px] sm:text-[14px] text-black dark:text-white p-2 dark:hover:bg-[#1e2328] hover:bg-[#f8f9fa]" data-aos="fade-right" data-aos-once="true">
                    {{lastMonth.name}}
                  </span>
                </div>
              </div>

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
  </style>