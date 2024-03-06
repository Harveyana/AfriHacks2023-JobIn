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
      
    </div>
</template>

<script setup lang="ts">
// import { FIREBASE_DB,FIREBASE_AUTH } from '../firebaseConfig';
// import { doc, onSnapshot } from "firebase/firestore"
// import type { user } from '../interfaces';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const state = useGlobalState()
// const {getUser} = useFireBase()

// console.log(state.user.value)

// const showMobileMenu = ref(false)
// const openSetupDialog = ref(false)
const loader = ref(true)
const nuxtApp = useNuxtApp()
const router = useRouter()

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