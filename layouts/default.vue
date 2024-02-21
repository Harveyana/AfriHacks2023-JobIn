<template>
    <SkeletonLoader v-if="loader" />
    <div v-else class="h-[90vh] sm:h-screen bg-[#a6abac] dark:bg-[#0b1015] max-h-screen 2xl:max-h-[80vh] border-2 border-black max-w-screen-xl my-auto mx-auto grid grid-cols-12 mx-auto overflow-hidden">
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
      <BaseDialog :visible="state.showLoader.value">
        <div class="w-full h-full rounded-3xl flex flex-col items-center justify-center bg-[#0b1015] py-10 px-8 space-y-5">
          <Knob :size="150" valueColor="MediumTurquoise" textColor="white" v-model="state.ProgressNumber.value" :valueTemplate="`${state.ProgressNumber.value}%`" rangeColor="SlateGray" />

          <h1 class="blackCabinet text-xl capitalize text-white font-bold">
            {{state.Progress.value}} ...
          </h1>

          <!-- <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
            Upload resume or enter details manually
          </p> -->

          <BaseButton @click="state.showLoader.value = false;" class="bg-white">
            <span class="text-[16px] text-black hover:text-gray-200 text-center">Cancel</span>
          </BaseButton>

        </div>
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