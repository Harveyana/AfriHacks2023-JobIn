<template>
    <div class="w-full h-[80%] overflow-hidden mb-2">
 
     <!-- Container -->
        <section class="overflow-hidden bg-transparent w-full h-full grid grid-cols-12 gap-y-2 gap-x-4 pt-2 px-2 sm:px-4">

            <!-- Table Container -->
            <div  class="h-full p-4 rounded-2xl bg-white dark:bg-[#12171d] overflow-y-scroll col-span-12">
        
                <!-- Heading Row -->
                <div class="hidden bg-gray-200 dark:bg-[#0b1015] w-full sm:p-4 border-b border-gray-100 dark:border-[#23282d] sm:grid grid-cols-12 gap-2 sm:gap-x-4  dark:text-white text-black">
                    <span class="py-1 sm:py-0 col-span-9 sm:col-span-4 text-xs sm:text-sm  extraboldCabinet">
                        Role
                    </span>

                    <span class="py-1 sm:py-0 col-span-3 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet">
                        Last Edited
                    </span>

                    <span class="py-1 sm:py-0 col-span-4 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet">
                        Date Created
                    </span>

                </div>

                <!-- Data Row -->
                <div class="row bg-white hover:bg-gray-200 cursor-pointer dark:hover:bg-[#0b1015] dark:bg-[#12171d] border-b border-gray-100 dark:border-[#23282d] w-full py-1 sm:p-4 grid grid-cols-12 gap-2 sm:gap-x-4">
                    <span class=" truncate col-span-8 sm:col-span-4 text-sm sm:text-sm  extraboldCabinet text-[#2E2E2E] dark:text-white">
                        Senior Product Designer at JobIn
                    </span>

                    <span class=" text-center sm:text-left truncate pt-[2px] sm:py-0 col-span-3 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                        Today
                    </span>

                    <span class="sm:py-0 col-span-9 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                        2023-11-15 13:30
                    </span>

                </div>


            </div>

            <div v-if="false" class="col-span-12 bg-white dark:bg-[#12171d] rounded-3xl flex flex-col items-center justify-center space-y-4 lg:space-y-8 py-20 mb-2 lg:mb-0">
                <div class='w-[10%]'>
                    <img
                    src='~/assets/img/docEmpty.svg'
                    class="w-full"
                    alt=""
                    />
                </div>

                <h1
                    class="text-lg text-black dark:text-white cabinet flex flex-col items-center justify-center"
                    >
                    No available history
                    <p  class="w-1/2 text-xs sm:text-sm text-center text-gray-500 cabinet paragraph mx-14 mt-4">
                    Your document will be visible after you generate your first resume and cover letter
                    </p>
                </h1>

            
            </div>
        
        </section>

       
    </div>

 </template>

 <script setup lang="ts">
  definePageMeta({
  middleware: [
    'auth',
    // Add in more middleware here
  ]
});

  const selectedDialogue = ref();
  const route = useRoute()
 

  const enterDialogue = ()=>{
    console.log(selectedDialogue.value.role)
    
  }

  const dialogues:{role:string;lastEdited:string;dateCreated:string}[]=[
    {
        role:'Product Designer',
        lastEdited:'Today',
        dateCreated:'2023-11-30'
    },
    {
        role:' Senior Product Designer',
        lastEdited:'Today',
        dateCreated:'2023-11-30'
    },
    {
        role:'Software Engineer',
        lastEdited:'Today',
        dateCreated:'2023-11-30'
    },
    {
        role:'Data analyst',
        lastEdited:'Yesterday',
        dateCreated:'2023-11-30'
    },
    {
        role:'laravel developer',
        lastEdited:'Last Month',
        dateCreated:'2023-11-30'
    },
    {
        role:'Brand Designer',
        lastEdited:'Yesterday',
        dateCreated:'2023-11-30'
    }
  ]
 

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