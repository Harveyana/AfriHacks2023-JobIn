<template>
  <div class="max-w-screen w-full sm:w-full h-full flex flex-col flex items-center justify-start overflow-x-hidden overflow-y-scroll">

    <!-- Container -->
      
    <section class=" w-full sm:w-[40%] lg:w-[33%] flex flex-col items-center justify-start pt-8 sm:pt-8 lg:pt-10 ">

        <div class="w-full flex flex-col items-center justify-center space-y-3">
          <svg @click="$router.back" class="ml-3 mr-auto cursor-pointer stroke-white" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 512 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"/><path fill="none" class="stroke-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"/></svg>
          <h1  class="blackCabinet text-2xl lg:text-4xl text-center text-white font-bold" data-aos="fade-right" data-aos-once="true">
            Complete Account Setup
          </h1>-
          <p class="text-sm lg:text-xl text-[#555a5c] text-center flex flex-row items-center justify-center">
            Complete your information
          </p>

          <!-- <div class="w-[95%] flex flex-col items-start justify-center">
              <span class="text-sm text-[#555a5c] mb-2 ml-2">Upload means</span> -->
              <!-- Select Means of Upload -->
              <!-- <BaseSelect :options="UploadMeansArray" placeholder="Choose a means of uploading your resume" @optionChanged="(value:string)=>{changeOption(value)}" />
          </div> -->

        </div>

    </section>


    <section class=" w-full flex flex-col items-center justify-start">
      <!-- IMPORT SCREEN TABS -->
        <div class="w-[98%] mt-4 flex items-center justify-center">
           
          <UploadResume v-if="UploadMeans == 'Upload from device'"/>
          <userDetailsForm v-if="UploadMeans == 'Manually enter your details'" />

        </div>
    </section>

    <BaseDialog :visible="openConfirmedDialogue">
      <div class="w-full h-full rounded-3xl flex flex-col items-center justify-center bg-[#0b1015] py-10 px-6 space-y-5">
        <img src="~/assets/img/success.svg" class="w-14 cursor-pointer p-1 rounded-[50px] mx-2 md:w-24" />

        <h1 v-if="state.user.value.displayName" class="blackCabinet text-lg text-white font-bold">
          Welcome {{state.user.value.displayName}}
        </h1>

        <span class="text-sm text-[#555a5c] text-center w-[80%]">
          You have successfully completed your account set-up
        </span>

        <BaseButton @click="openConfirmedDialogue= false;$router.push('/')" class="bg-white">
          <span class="text-[16px] text-black hover:text-gray-200 text-center">Go to home</span>
        </BaseButton>

      </div>
    </BaseDialog>

  </div>

  

</template>


<script setup lang="ts">
  
  definePageMeta({
    middleware: [
      'auth',
      // Add in more middleware here
    ],
    layout: 'custom'
  });

  const state = useGlobalState()

  const openConfirmedDialogue = state.showConfirmDialogue

  const UploadMeans = ref('Manually enter your details')

  const UploadMeansArray = ['Upload from device','Manually enter your details']

  const signup = ref(true)

  // const openDialog = ref(true)

  const changeOption = (option:string)=>{
    UploadMeans.value = option
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