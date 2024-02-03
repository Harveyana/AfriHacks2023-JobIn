<template>
    <div class="w-full h-full sm:h-[90%] overflow-hidden bg-[#f6f6f6] dark:bg-[#0b1015]">
 
     <!-- Container -->
     <section class="overflow-hidden w-full h-full grid grid-cols-12 gap-y-2 gap-x-4 pt-2 px-2 sm:px-4">
 
         <div class="h-[92%] col-span-12 lg:col-span-3">
           <div class="w-full h-full bg-white dark:bg-[#12171d] rounded-2xl p-4">
 
             <DocHistory />
 
 
           </div>
         </div>
 
         <div class="h-full overflow-x-hidden overflow-y-scroll space-y-2 col-span-12 lg:col-span-9">
 
           <div class="w-full overflow-x-hidden flex flex-col space-y-4 h-[85%] bg-white dark:bg-[#12171d] rounded-2xl px-2 py-3 overflow-scroll">
 
           <!-- <ChatRequest :data="chatRequest"/> -->
 
             <!-- <ChatResponse :data="chatResponse"/> -->
           
           </div>
 
       <div class="h-[15%] sm:h-[18%] lg:h-[10%] w-full flex flex-row items-center justify-between py-1 px-2 rounded-2xl">
         <input
           type="text"
           class="w-[80%] sm:w-[92%] border-gray-400 border dark:text-gray-400 text-sm h-full py-2 px-4 bg-white dark:bg-[#12171d] rounded-3xl"
           placeholder="Enter Job description here..."
         />
           <svg class="w-[15%] lg:w-[6%] dark:bg-[#0b1015] hover:bg-gray-800 fill-black dark:hover:fill-black sm:px-2 h-full border border-gray-400 rounded-[25px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
             <path d="M12.1886 6.01009C12.4554 6.03844 12.7133 6.12612 12.943 6.26767C13.227 6.44266 13.4568 6.6931 13.6067 6.99104L17.8079 15.3906C17.9316 15.6429 17.9972 15.9196 18 16.2005C17.9999 16.5005 17.9249 16.7956 17.7817 17.0592C17.6385 17.3228 17.4316 17.5464 17.18 17.7097C16.9283 17.873 16.6399 17.9709 16.3407 17.9945C16.0416 18.018 15.7414 17.9664 15.4673 17.8445L12.2444 16.4045C12.1664 16.3719 12.0828 16.355 11.9983 16.355C11.9138 16.355 11.8301 16.3719 11.7522 16.4045L8.52929 17.8445C8.19058 17.9943 7.81388 18.0361 7.45054 17.9641C7.08721 17.8922 6.75491 17.7099 6.49897 17.4423C6.24303 17.1746 6.0759 16.8346 6.02036 16.4685C5.96482 16.1024 6.02357 15.7281 6.18862 15.3966L10.3898 6.99704V6.99104C10.5398 6.6931 10.7695 6.44266 11.0536 6.26767C11.2855 6.12473 11.5462 6.03672 11.8158 6.00927C11.9389 5.98679 12.0656 5.98707 12.1886 6.01009Z" fill="#71787B" fill-opacity="0.4"/>
           </svg>
         </div>
       </div>
 
     
     </section>
 
 </div>
 
 </template>
 <script setup lang="ts">
 const route = useRoute()
 
 const visible = ref(false)

 const chatRequest = ref('')
 const chatResponse = ref('')
 
 const openDialog = ()=>{
   visible.value = true
 }

 onMounted(() => {
  console.log(route.params.id)
})
       
    
 </script>
 
 <style scoped>

 </style>