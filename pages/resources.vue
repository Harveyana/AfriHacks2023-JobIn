<template>
  <section class="w-full h-screen overflow-scroll no-scrollbar">

      <BaseSection class="my-[15%] sm:my-0">
        <div class="col-span-12 h-fit lg:h-[65vh] flex flex-col sm:flex-row items-center sm:items-start justify-center mt-6 px-4 space-y-4 sm:space-y-0 sm:space-x-3 mb-20 sm:px-0">
          <div v-for="resource in resources" :key="resource.name" class="w-full h-fit lg:h-full sm:w-[23%] p-5 sm:py-5 sm:px-3 bg-white dark:bg-[#12171d] flex flex-col items-center rounded-2xl">

              <div class="w-full sm:h-[50%] sm:w-[80%] flex flex-row items-center justify-center">
                <img
                  
                  :src=resource.image
                  class="w-full"
                  alt=""
                />

              </div>
              
              <NuxtLink :to="resource.link" target="_blank" class="w-full flex items-start justify-start mb-4">
                <baseButton
                class="border hover:bg-black hover:text-white mt-3 border-black dark:border-white w-[40] px-3 py-1 bg-white dark:bg-[#12171d] text-xs sm:text-sm text-black dark:text-white flex items-center justify-center"
                >
                  <span>{{resource.action}}</span>
                </baseButton>
              </NuxtLink>
              

              <div class="w-full flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl dark:text-white extraboldCabinet"
                >
                 {{resource.name}}
                </h1>
                <p class=" text-xs lg:text-sm cabinet text-gray-500 paragraph">
                  {{resource.about}}
                </p>
              </div>


          </div>
        </div>
        
      </BaseSection>

      <BottomNav />


    </section>
</template>
<script setup lang="ts">

import youtubeImage from '~/assets/img/youtube.svg'
import newsLetterImage from '~/assets/img/newsletter.svg'
import podcastImage from '~/assets/img/podcast.svg'
import eventsImage from '~/assets/img/events.svg'

      
const resources:{name:string;about:string;image:string;link:string;action:string}[] = [
  {
    name:'YouTube',
    about:'Learn from industry experts in our network who have successfully landed international career opportunities.',
    image: youtubeImage,
    link:'https://www.youtube.com/channel/UCpzH4WRpoFKvvvFiyfb6kfg',
    action:'Subscribe'
  },
  {
    name:'Events',
    about:'Attend our virtual and physical events hosted for global talents by global talents like you.',
    image: eventsImage,
    link:'https://lu.ma/u/usr-OBJo1d5CofimkIh',
    action:'Explore'
  },
  {
    name:'Newsletter',
    about:'Access all the resources you need to succeed in your career either as a newbie, mid-level, senior level, or Expat talent in your field and region.',
    image: newsLetterImage,
    link:'#',
    action:'Coming Soon'
  },
  {
    name:'Podcast',
    about:'Listen to insightful career and relocation advice on the go shared by experts who are succeeding in their career.',
    image: podcastImage,
    link:'#',
    action:'Coming Soon'
  }
]
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