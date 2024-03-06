<template>
           <!-- mobile only -->

            <!-- <div class="sm:hidden w-full flex flex-row items-start justify-between">
              <img src="~/assets/img/Ai-Avatar.svg" class="w-8 cursor-pointer p-1 rounded-[50px] mx-2 md:w-8" />
              
              <div class="flex flex-row justify-center items-center">
                <svg class=' cursor-pointer w-6 md:w-7 stroke-black dark:stroke-[#3e4449] mx-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"/></g></svg>
                <svg class=' cursor-pointer w-6 md:w-7 stroke-black dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2"/></g></svg>
              </div>
              
            </div> -->
            <!-- mobile only -->

            <div :class="`w-full h-[70%] flex flex-row items-start justify-start`">
              <img src="~/assets/img/Ai-Avatar.svg" class="w-6 cursor-pointer p-1 rounded-[50px] sm:mx-2 md:my-1 sm:w-8" />
              <div class="w-full sm:w-[90%] border border-gray-100 dark:border-[#23282d] bg-white dark:bg-[#0b1015] rounded-2xl h-full flex flex-col ">
                <textarea
                  v-model="state.chatResponse.value"
                  class="w-full no-scrollbar cabinet dark:text-white text-xs sm:text-sm h-full p-3 bg-white dark:bg-[#0b1015] resize-none rounded-2xl">
                </textarea>
                <div class="my-2 mx-2 flex flex-row items-center justify-between">
                  <div class="my-2 mx-2 flex flex-row items-center justify-start">
                    <span class="cabinet cursor-pointer text-xs sm:text-sm text-black dark:text-white" data-aos="fade-right" data-aos-once="true">
                      {{props.expanse == 30 ? 'See more':'See less'}}
                    </span>
                    <svg v-if="props.expanse == 30" @click="$emit('seeMore')" class=' cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
                    <svg v-if="props.expanse == 70" @click="$emit('seeLess')" class=' cursor-pointer w-6 md:w-7 dark:fill-[#3e4449] dark:stroke-[#3e4449]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></g></svg>
                  </div>

                  <div class="flex flex-row items-center justify-center space-x-6">
                    <svg class='flex-none cursor-pointer w-4 sm:w-2 md:w-10 stroke-gray-500 hover:stroke-black dark:stroke-[#3e4449] dark:hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></g></svg>
                    <svg class=' flex-none cursor-pointer mx-2 sm:mx-none w-4 sm:w-2 md:w-10 stroke-gray-500 hover:stroke-black dark:stroke-[#3e4449] dark:hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48"><g transform="translate(48 0) scale(-1 1)"><path stroke-linejoin="round" stroke-width="4" d="M27.6 18.6v-7.2A5.4 5.4 0 0 0 22.2 6L15 22.2V42h20.916a3.6 3.6 0 0 0 3.6-3.06L42 22.74a3.6 3.6 0 0 0-3.6-4.14H27.6ZM15 22h-4.806C8.085 21.963 6.283 23.71 6 25.8v12.6a4.158 4.158 0 0 0 4.194 3.6H15V22Z"/></g></svg>
                    <!-- Regerate button -->
                    <button class="px-2 border border-gray-600 dark:border-white text-xs sm:text-sm text-black dark:text-white flex flex-row items-center justify-center dark:hover:bg-gray-800 rounded-2xl ">
                      <svg class='cursor-pointer w-4 sm:w-3 md:w-10 stroke-gray-500 dark:stroke-white my-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747"/><path d="M20 4v5h-5"/></g></g></svg>
                      <span class="cabinet cursor-pointer text-[8px] sm:text-[12px] hover:text-gray-700 text-black dark:hover:text-gray-200 dark:text-white" data-aos="fade-right" data-aos-once="true">
                        Regenerate
                      </span>
                    </button>
                  </div>
                  
                </div>
              </div>
              <div class="flex flex-col justify-center items-center space-y-4">
                <BaseToolTip text="Edit Document">
                  <svg class='hidden sm:block cursor-pointer w-4 sm:w-7 stroke-gray-500 hover-stroke-black dark:stroke-[#3e4449] dark:hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10l3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7L17 4.414L15.414 6L18 8.586z"/></svg>
                </BaseToolTip>
                <BaseToolTip  text="Copy to clipboard">
                  <svg @click="copy()" class='hidden sm:block cursor-pointer w-4 sm:w-7 stroke-gray-500 hover-stroke-black dark:stroke-[#3e4449] dark:hover:stroke-white mx-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"/></g></svg>
                </BaseToolTip>
                <BaseToolTip text="Download Document">
                  <svg @click="$emit('openDownload')" class='hidden sm:block cursor-pointer w-4 sm:w-7 stroke-gray-500 hover-stroke-black dark:stroke-[#3e4449] dark:hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2"/></g></svg>
                </BaseToolTip>
              </div>
              
            </div>
            <BaseToast :model="toast.show" :success="toast.success" :title="toast.title" :description="toast.description" @close="toast.show = false"/>
  </template>
  <script setup lang="ts">
  const emit = defineEmits(['seeMore','seeLess','openDownload'])
  const state = useGlobalState()

  const toast = reactive({
    show:false,
    title:'',
    description:'',
    success:true
  })

  const initToast=(success:boolean,title:string,description:string)=>{
    toast.title = title
    toast.description = description
    toast.success = success
    toast.show = true
  }

  // const data = ref('Job Title: Product Designer')
  const props = defineProps<{
    // data: string;
    expanse: number;
  }>()
    
  const copy = ()=>{
    navigator.clipboard.writeText(state.chatResponse.value);
    initToast(true,'Copy to Clipboard','Successfull')
  }

  const expanded = ref(8)
  
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

 .no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
  </style>