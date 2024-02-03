<template>
  <div class="w-full h-full overflow-y-scroll bg-[#0b1015]">

    <!-- Container -->
    <section class="w-full h-full flex flex-row items-center justify-center ">

        <!-- sign Up -->
       <SignUp v-if="signup" @openLogin="signup = false" @show-verify="(email)=>{showVerify(email)}"/>
        <!-- Login -->
        <Login v-else @openSignup="signup = true"/>
        
    </section>
    <Toast group="success" severity='success' :pt="{
                  container: {
                      style: 'background: #7fdbb4; margin: 10px; padding:5px; color: white'
                  }
            }"/>

            <Toast group="fail" severity='error' :pt="{
                  container: {
                      style: 'background: #CA3433; margin: 10px; padding:5px; color: white'
                  }
            }"
    />

    <BaseDialog :visible="openDialog">
      <div class="w-full h-full rounded-3xl flex flex-col items-center justify-center bg-[#0b1015] py-10 px-6 space-y-5">
        <img src="~/assets/img/email.svg" class="w-14 cursor-pointer p-1 rounded-[50px] mx-2 md:w-24" />

        <h1 class="blackCabinet text-lg text-white font-bold">
          Email verification sent
        </h1>

        <p class="text-sm text-[#555a5c] text-center flex flex-row items-center justify-center">
          Email verification link has been sent to {{dialogEmail}}
        </p>

        <BaseButton @click="openDialog = false" class="bg-white">
          <span class="text-[16px] text-black hover:text-gray-200 text-center">Done</span>
        </BaseButton>

      </div>
    </BaseDialog>

  </div>

</template>


<script setup lang="ts">
import { sendEmailVerification } from 'firebase/auth';

  
  definePageMeta({
    layout: 'custom'
  })

  const state = useGlobalState()
  const user = state.user

  const signup = ref(true)

  const openDialog = ref(false)

  const dialogEmail = ref('')

  const showVerify = (email:string)=>{
    dialogEmail.value = email
    openDialog.value = true
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