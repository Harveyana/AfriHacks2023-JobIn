<template>
    <div class="w-full h-full sm:h-[95%] overflow-hidden mb-2">
        <!-- <Toolbar /> -->
     <!-- Container -->
        <section class="overflow-hidden bg-transparent w-full h-[80%] sm:h-fit mt-[20%] sm:mt-0 grid grid-cols-12 gap-y-2 gap-x-4 pt-2 px-2 sm:px-4">

            <!-- Table Container -->
            <div v-if="docs"  class="relative h-[75vh] max-h-[75vh] p-4 rounded-2xl bg-white dark:bg-[#12171d] col-span-12" >
        
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

                <ScrollAreaRoot
                    class="w-full h-[90%] rounded overflow-hidden bg-white"
                    style="--scrollbar-size: 10px"
                >
                    <ScrollAreaViewport class="w-full h-full rounded">
                        <div @click="retrieveDoc(doc.docId)" v-for="doc in docs " :key="doc.docId" class="row bg-white hover:bg-gray-200 cursor-pointer dark:hover:bg-[#0b1015] dark:bg-[#12171d] border-b border-gray-100 dark:border-[#23282d] w-full py-1 sm:p-4 grid grid-cols-12 gap-2 sm:gap-x-4">
                            <span class=" whitespace-nowrap truncate col-span-8 sm:col-span-4 text-sm sm:text-sm  extraboldCabinet text-[#2E2E2E] dark:text-white">
                                {{ doc.name }}
                            </span>

                            <span class=" text-center sm:text-left truncate pt-[2px] sm:py-0 col-span-3 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                                {{doc.type}}
                            </span>

                            <span class="sm:py-0 col-span-9 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                                {{doc.date.slice(0,25)}}
                            </span>

                        </div>
                        <div @click="retrieveDoc(doc.docId)" v-for="doc in docs " :key="doc.docId" class="row bg-white hover:bg-gray-200 cursor-pointer dark:hover:bg-[#0b1015] dark:bg-[#12171d] border-b border-gray-100 dark:border-[#23282d] w-full py-1 sm:p-4 grid grid-cols-12 gap-2 sm:gap-x-4">
                            <span class=" whitespace-nowrap truncate col-span-8 sm:col-span-4 text-sm sm:text-sm  extraboldCabinet text-[#2E2E2E] dark:text-white">
                                {{ doc.name }}
                            </span>

                            <span class=" text-center sm:text-left truncate pt-[2px] sm:py-0 col-span-3 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                                {{doc.type}}
                            </span>

                            <span class="sm:py-0 col-span-9 sm:col-span-4 text-xs sm:text-sm cabinet sm:extraboldCabinet text-[#71787B] dark:text-white">
                                {{doc.date.slice(0,25)}}
                            </span>

                        </div>
                    </ScrollAreaViewport>
                    <ScrollAreaScrollbar
                    class="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                    orientation="vertical"
                    >
                    <ScrollAreaThumb
                        class="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
                    />
                    </ScrollAreaScrollbar>
                    <ScrollAreaScrollbar
                    class="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                    orientation="horizontal"
                    >
                    <ScrollAreaThumb
                        class="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
                    />
                    </ScrollAreaScrollbar>
                </ScrollAreaRoot>
                <!-- Data Row -->
                
                
                <!-- <Doc :name="doc.name" :id="doc.docId" :date="docs.date" /> -->


            </div>

            <div v-else class="col-span-12 bg-white dark:bg-[#12171d] rounded-3xl flex flex-col items-center justify-center space-y-4 lg:space-y-8 py-20 mb-2 lg:mb-0">
                <div class='w-[15%]'>
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
        <!-- <BottomNav /> -->


       
    </div>

 </template>

 <script setup lang="ts">
  definePageMeta({
    middleware: [
        'auth',
        // Add in more middleware here
    ]
  });

  const state = useGlobalState()
    // const {useSorter} = useDocSort()
    // const docs = ref(state.user.value?.docHistory)
    const docs = computed(() => state.user.value?.docHistory)
    // console.log(docs)

  const selectedDialogue = ref();
  const route = useRoute()
  const router = useRouter()

  const retrieveDoc = (id:string)=>{
    router.push({
        path: '/',
        query: { id: id },
   })
  }
 

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