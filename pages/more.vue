<template>
  <section class="w-screen sm:w-full h-screen overflow-scroll dark:bg-[#12171d]">
    <Toolbar />

      <BaseSection class="my-[18%]">
        <div class="col-span-12 h-full flex flex-col items-start justify-start mt-6 space-y-6">

          <NuxtLink :to="{path: '/account',query: { tab:'tab1' }}" class="w-full flex flex-row items-center justify-start space-x-3">
              <div class="w-[22%]">
                <img v-if="user" :src="user.photoUrl" class="w-full cursor-pointer p-1 rounded-[50px] bg-green-300" />
              </div>

              <div class="w-[50%]">
                <span v-if="user" class="extraboldCabinet cursor-pointer truncate text-xl text-black dark:text-white">
                  {{user.displayName}}
                </span>
                <baseButton
                @click="$router.push({path: '/account',query: { tab:'tab1' }})"
                class=" border hover:bg-black hover:text-white border-black dark:border-white py-1 bg-white dark:bg-[#12171d] text-xs text-black dark:text-white"
                >
                  <span>View Profile</span>
                </baseButton>

              </div>

          </NuxtLink>

            
            <!-- <div class="w-full flex items-start justify-start mb-4">
                <baseButton
                class="border hover:bg-black hover:text-white mt-3 border-black dark:border-white w-[40] px-3 py-1 bg-white dark:bg-[#12171d] text-xs text-black dark:text-white flex items-center justify-center"
                >
                  <span>Coming Soon</span>
                </baseButton>
            </div> -->
              

            <div class="w-full flex flex-col items-start justify-start space-y-6">
              <span class="extraboldCabinet cursor-pointer truncate text-lg text-gray-500 dark:text-white">
                Settings
              </span>

              <NuxtLink :to="{path: '/account',query: { tab:'tab2' }}" class="w-full flex flex-row items-center justify-start space-x-3">
                <div class="w-[15%]">
                  <img src="~/assets/img/account.svg" class="w-full border border-white cursor-pointer rounded-[50px]" />
                </div>

                <div class="w-full">
                  <h1 class="extraboldCabinet cursor-pointer text-sm text-black dark:text-white">
                    Account
                  </h1>
                </div>

              </NuxtLink>

              <NuxtLink :to="{path: '/account',query: { tab:'tab3' }}" class="w-full flex flex-row items-center justify-start space-x-3">
                <div class="w-[15%]">
                  <img src="~/assets/img/bell.svg" class="w-full border border-white cursor-pointer rounded-[50px]" />
                </div>

                <div class="w-full">
                  <h1 class="extraboldCabinet cursor-pointer text-sm text-black dark:text-white">
                    Notifications and Appearance
                  </h1>
                </div>

              </NuxtLink>

              <NuxtLink :to="{path: '/account',query: { tab:'tab4' }}" class="w-full flex flex-row items-center justify-start space-x-3">
                <div class="w-[15%]">
                  <img src="~/assets/img/card.svg" class="w-full border border-white cursor-pointer rounded-[50px]" />
                </div>

                <div class="w-full">
                  <h1 class="extraboldCabinet cursor-pointer text-sm text-black dark:text-white">
                    Subscriptions
                  </h1>
                </div>

              </NuxtLink>
          
            </div>

            <div class="w-full flex flex-col items-start justify-start space-y-6">
              <span class="extraboldCabinet cursor-pointer truncate text-lg text-gray-500 dark:text-white">
                Support
              </span>

              <NuxtLink :to="{path: '/resources'}" class="w-full flex flex-row items-center justify-start space-x-3">
                <div class="w-[15%]">
                  <img src="~/assets/img/resource.svg" class="w-full border border-white cursor-pointer rounded-[50px]" />
                </div>

                <div class="w-full">
                  <h1 class="extraboldCabinet cursor-pointer text-sm text-black dark:text-white">
                    Resources
                  </h1>
                </div>

              </NuxtLink>

              <NuxtLink :to="{path: ''}" class="w-full flex flex-row items-center justify-start space-x-3">
                <div class="w-[15%]">
                  <img src="~/assets/img/help.svg" class="w-full border border-white cursor-pointer rounded-[50px]" />
                </div>

                <div class="w-full">
                  <h1 class="extraboldCabinet cursor-pointer text-sm text-black dark:text-white">
                    Help Center
                  </h1>
                </div>

              </NuxtLink>

              <div @click="logout()" class="w-full flex flex-row items-center justify-start space-x-3">
                <div class="w-[15%]">
                  <img src="~/assets/img/logout.svg" class="w-full border border-white cursor-pointer rounded-[50px]" />
                </div>

                <div class="w-full">
                  <h1 class="extraboldCabinet cursor-pointer text-sm text-black dark:text-white">
                    Logout
                  </h1>
                </div>

              </div>
          
            </div>


          </div>
        
      </BaseSection>

      <BottomNav />


    </section>
</template>
<script setup lang="ts">
import { getAuth, signOut } from "firebase/auth";

const state = useGlobalState()
const user = state.user

const router = useRouter()

const logout = ()=>{
  const auth = getAuth();
    signOut(auth).then(() => {
      router.push('/auth')
    }).catch((error) => {
     console.log(error)
  });
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