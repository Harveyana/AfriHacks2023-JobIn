<template>
    <div class="w-full h-screen bg-[#a6abac] dark:bg-[#0b1015] max-h-[50rem] border-2 border-black max-w-screen-xl flex flex-wrap flex-row mx-auto overflow-hidden">
      <MobileMenu :show-menu="showMobileMenu" @closeMenu="showMobileMenu = false"/>
      <SideBar />
      <section class="h-full w-full relative overflow-hidden sm:w-[75%] lg:w-[82%] grid grid-cols-12 gap-x-2 bg-[#f6f6f6] dark:bg-[#0b1015]">
        <!-- <Toolbar :user="state.user" @openMenu="showMobileMenu = true" :new="true"/> -->

        <div class="col-span-12 w-full overflow-hidden scroll-smooth">
          <div class="w-full h-full flex flex-col relative">
            <Toolbar @openMenu="showMobileMenu = true"/>
            <slot/>
            <BottomNav />
          </div>
          
        </div>
        
      </section>
      



      <BaseDialog :visible="openSetupDialog">
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
      
    </div>
</template>

<script setup lang="ts">
// import { FIREBASE_DB,FIREBASE_AUTH } from '../firebaseConfig';
// import { doc, onSnapshot } from "firebase/firestore"
// import type { user } from '../interfaces';

// const state = useGlobalState()
// const {getUser} = useFireBase()

// console.log(state.user.value)

const showMobileMenu = ref(false)
const openSetupDialog = ref(false)

// onMounted(async() => {
//   // const userId = FIREBASE_AUTH.currentUser?.uid

//   if(!state.user.value.userDetails) openSetupDialog.value = true

//   // if(userId){
//   //     onSnapshot(doc(FIREBASE_DB, "users", userId), (doc) => {
//   //       const userdoc = doc.data()
//   //       state.user.value = userdoc
//   //       if(userdoc?.userDetails) openSetupDialog.value = false
//   //       console.log("Current data: ", doc.data())
//   //     });
//   //   }
// })
</script>