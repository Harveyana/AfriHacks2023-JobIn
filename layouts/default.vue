<template>
    <SkeletonLoader v-if="loader" />
    <div v-else class="h-[90vh] sm:h-screen bg-[#a6abac] dark:bg-[#0b1015] max-h-screen 2xl:max-h-[80vh] border-2 border-black max-w-screen-2xl my-auto mx-auto grid grid-cols-12 mx-auto overflow-hidden">
      <!-- <MobileMenu :show-menu="showMobileMenu" @closeMenu="showMobileMenu = false"/> -->
      <SideBar />
      <section class="h-full col-span-12 overflow-hidden sm:col-span-9 lg:col-span-10 grid grid-cols-12 gap-x-2 bg-[#f6f6f6] dark:bg-[#0b1015]">
        <!-- <Toolbar :user="state.user" @openMenu="showMobileMenu = true" :new="true"/> -->
        <!-- sm:w-[75%] lg:w-[82%] -->
        <!-- <div class="h-full col-span-12 "> -->
          <div class="h-full col-span-12">
            <Toolbar />
            <slot/>
            <BottomNav />
          </div>
          
        <!-- </div> -->
        
      </section>
      


      <!-- Dialogue 1 -->

      <BaseDialog :visible="state.openSetupDialog.value">
        <div class="w-full h-full rounded-3xl flex flex-col items-center justify-center bg-[#0b1015] py-10 px-8 space-y-5">
          <img src="~/assets/img/email.svg" class="w-14 cursor-pointer p-1 rounded-[50px] mx-2 md:w-24" />

          <h1 class="blackCabinet text-xl sm:text-2xl text-white font-bold">
            Complete Account Setup
          </h1>

          <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
            Upload resume or enter details manually
          </p>

          <BaseButton @click="$router.push('/setup')" class="bg-white">
            <span class="text-[16px] text-black hover:text-gray-200 text-center">Start Setup</span>
          </BaseButton>

        </div>
      </BaseDialog>
    

      <!--  Dialogue 2 -->
      <BaseDialog :visible="state.showLoader.value" class="bg-white">
        <div class="w-full h-full rounded-3xl flex flex-row items-center justify-center bg-white py-4 px-4 gap-x-2 gap-y-5">
          
          <img src="~/assets/img/logo/JobRoutesDark.svg" class=" sm:mb-2 animate-pulse sm:w-24"/>

          <ProgressRoot
            v-model="state.ProgressNumber.value"
            class="relative flex items-center justify-center gap-6 overflow-hidden animate-pulse bg-white rounded-full w-full sm:w-[400px] px-4  h-12 sm:h-fit"
            style="transform: translateZ(0)"
          >
            
            <ProgressIndicator
              class="bg-black rounded-full w-full h-8 transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
              :style="`transform: translateX(-${100 - state.ProgressNumber.value}%)`"
            />
            <svg @click="state.showLoader.value = false;" class="w-6 h-fit rounded-full cursor-pointer hover:bg-gray-300 fill-black dark:stroke-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90z"/></svg>
          </ProgressRoot>

        </div>
        <p class="mx-20 w-full blackCabinet text-sm capitalize text-black dark:text-white font-bold">
            {{state.Progress.value}} ...
        </p>
      </BaseDialog>


      <!-- Dialogue 3 -->
      <BaseDialog :visible="state.showUpgradeDialogue.value">
        <div class="w-full h-full rounded-3xl flex flex-col items-center justify-center bg-[#0b1015] py-10 px-8 space-y-5">
          <img src="~/assets/img/upgrade.svg" class="w-16 cursor-pointer p-1 rounded-[50px] mx-2 md:w-24" />

          <h1 class="blackCabinet text-xl sm:text-2xl text-white font-bold">
            Upgrade to continue
          </h1>

          <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
            You've exceeded your free trial.<br>
            Upgrade to a premium plan to continue
          </p>

          <BaseButton @click="$router.push('/account?tab=tab4');state.showUpgradeDialogue.value = false" class="bg-white">
            <span class="text-[16px] text-black hover:text-gray-200 text-center">Upgrade Plan</span>
          </BaseButton>

        </div>
      </BaseDialog>

      <!-- Dialogue 4 -->
      <BaseDialog :visible="state.showActions.value">
        <div class="rounded-3xl pb-10 bg-white w-full">

          <div class="flex items-center justify-between px-6 py-5 border-b-2">
            <h1 class="cabinet text-xs sm:text-sm text-black font-bold">
              What do you want to generate?
            </h1>

            <svg @click="state.showActions.value = false" class="cursor-pointer " width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64996 7.00029L13.6585 1.99179C14.1146 1.53563 14.1146 0.798292 13.6585 0.342125C13.2023 -0.114042 12.465 -0.114042 12.0088 0.342125L7.00029 5.35063L1.99179 0.342125C1.53563 -0.114042 0.798292 -0.114042 0.342125 0.342125C-0.114042 0.798292 -0.114042 1.53563 0.342125 1.99179L5.35063 7.00029L0.342125 12.0088C-0.114042 12.465 -0.114042 13.2023 0.342125 13.6585C0.569625 13.886 0.868292 14.0003 1.16696 14.0003C1.46563 14.0003 1.76429 13.886 1.99179 13.6585L7.00029 8.64996L12.0088 13.6585C12.2363 13.886 12.535 14.0003 12.8336 14.0003C13.1323 14.0003 13.431 13.886 13.6585 13.6585C14.1146 13.2023 14.1146 12.465 13.6585 12.0088L8.64996 7.00029Z" fill="black"/>
            </svg>

          </div>


          <div class="w-full h-full  flex flex-col items-center justify-center bg-white pt-8 px-8 gap-y-6">

            <div class=" rounded-lg flex flex-col sm:flex-row  items-center justify-center gap-4">

              <div @click="generative = 'coverLetter'" :class="{ 'border border-black bg-gray-200': generative == 'coverLetter'}" class=" rounded-lg border cursor-pointer flex hover:border-black flex-col items-start justify-center">

                <img src="~/assets/img/notepad.svg"  class="w-32 m-5 sm:m-9 sm:w-50 " />

                <h1 :class="generative == 'coverLetter'? 'text-black':'text-gray-400' " class="py-2 rounded-lg px-4 w-full cabinet bg-white text-xs sm:text-lg">
                  Cover Letter
                </h1>

              </div>

              <div @click="generative = 'resume'" :class="{ 'border border-black bg-gray-200': generative == 'resume'}" class=" rounded-lg border cursor-pointer flex hover:border-black flex-col items-start justify-center">

                <img src="~/assets/img/summary.svg"  class="w-32 m-5 sm:m-9 sm:w-50 " />

                <h1 :class="generative == 'resume'? 'text-black':'text-gray-400' " class="py-2 rounded-lg px-4 w-full cabinet bg-white text-xs sm:text-lg">
                  Resume
                </h1>

              </div>

              <!-- <img @click="generative = 'resume'" src="~/assets/img/coverletter.svg" :class="{ 'border border-black': generative == 'resume'}" class="w-50 border rounded-lg hover:border-black cursor-pointer sm:w-50" /> -->

            </div>
            

            
            <button :disabled="generative == ''" @click="state.showActions.value = false; generate(generative)" :class="generative !== ''?'bg-black':'bg-gray-300'" class=" w-full flex flex-row items-center justify-center rounded-3xl p-3">
              <span class="text-[16px] text-white hover:text-gray-200 text-center">Continue</span>
            </button>

          </div>

        </div>

        


        
      </BaseDialog>
      
    </div>
</template>

<script setup lang="ts">
// import { FIREBASE_DB,FIREBASE_AUTH } from '../firebaseConfig';
// import { doc, onSnapshot } from "firebase/firestore"
// import type { user } from '../interfaces';
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const state = useGlobalState()
// const {getUser} = useFireBase()

// console.log(state.user.value)

const generative = ref('')
// const openSetupDialog = ref(false)
const loader = ref(true)
const nuxtApp = useNuxtApp()
const router = useRouter()

const generate = async (doc: string) => {
  try {
    if (!state.user.value.userDetails) return state.openSetupDialog.value = true;
    if(state.user.value.subscription.credit < 1) return state.showUpgradeDialogue.value = true;
    if (state.chatRequest.value === '') return;

    state.showLoader.value = true;

    state.Progress.value = 'fetching document';
    state.ProgressNumber.value = 10;

    // Simulate fetching document (adjust delay as needed)
    await new Promise(resolve => setTimeout(resolve, 3000));

    state.Progress.value = 'scanning user info';
    state.ProgressNumber.value = 30;

    // Simulate scanning user info (adjust delay as needed)
    await new Promise(resolve => setTimeout(resolve, 3000));

    state.Progress.value = 'scanning job description';
    state.ProgressNumber.value = 45;

    // Simulate scanning job description (adjust delay as needed)
    await new Promise(resolve => setTimeout(resolve, 3000));

    state.Progress.value = 'industry checks';
    state.ProgressNumber.value = 55;

    // Simulate industry checks (adjust delay as needed)
    await new Promise(resolve => setTimeout(resolve, 3000));

    state.Progress.value = 'curating content';
    state.ProgressNumber.value = 70;

    // Simulate curating content (adjust delay as needed)
    await new Promise(resolve => setTimeout(resolve, 3000));

    state.Progress.value = 'rounding up';
    state.ProgressNumber.value = 100;

    // Make axios request
    const response = await axios.post(`https://jobroutes-backend.onrender.com/api/generate/${doc}`, {
      description: state.chatRequest.value,
      userId: state.user.value.uid
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response Data:', response.data);
    state.chatResponse.value = response.data;
    state.showLoader.value = false;
  } catch (error) {
    console.error('Error:', error);
    state.showLoader.value = false;
    // Handle error (e.g., show error message to user)
  }
};


onBeforeMount(async() => {
   
    // const user = nuxtApp.$auth.currentUser
    
    // if (!user) 
  

    onAuthStateChanged(nuxtApp.$auth,(user) => {
            if (user) {
              loader.value = false
            // ...
            } else {
            // User is signed out
              return router.push('/auth');
            }
    })

})
</script>