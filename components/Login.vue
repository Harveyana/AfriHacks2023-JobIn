<template>
      <div class="w-full sm:w-[60%] lg:w-[40%] space-y-8 sm:space-y-4">

        <div class="w-full flex flex-col items-center justify-center space-y-5">
          <h1 v-if="showLoader == false" class="blackCabinet text-5xl text-white font-bold" data-aos="fade-right" data-aos-once="true">
            Login
          </h1>
          <ProgressSpinner v-if="showLoader" class="" style="width: 80px; height: 80px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />
        </div>

        <div class="w-full flex flex-col items-center justify-center space-y-8 px-12">
          <button @click="googleSignIn()" class="w-full flex flex-row hover:bg-gray-600 items-center justify-center border-2  border-white rounded-3xl p-1.5">
            <img src="~/assets/img/googleLogo.svg" class="w-5 cursor-pointer mx-2" />
            <span class="text-[16px] text-white text-center">Continue with Google</span>
          </button>

          <div class="w-full flex flex-row items-center justify-center">
            <div class="border-[#555a5c] border w-[34%]"></div>
            <span class="text-xl text-[#555a5c] text-center mx-12">Or</span>
            <div class="border-[#555a5c] border w-[34%]"></div>
          </div>

          <div class="w-full flex flex-col items-start justify-start space-y-6">
            <span class="text-sm text-[#555a5c] text-left ">Continue with email address</span>

            <div class="w-full flex flex-col items-start justify-start space-y-3">
              <span class="text-sm text-[#555a5c] text-left ">Email address</span>
              <input
                :="email"
                type="text"
                class="w-full border-[#555a5c] border text-gray-400 text-sm py-3 px-4 bg-[#12171d] rounded-3xl"
                placeholder="Enter email address..."
              />
            </div>
            
            <div class="w-full flex flex-col items-start justify-start space-y-3">
              <span class="text-sm text-[#555a5c] text-left ">Password</span>
              <input
                :="password"
                type="password"
                class="w-full border-[#555a5c] border text-gray-400 text-sm py-3 px-4 bg-[#12171d] rounded-3xl"
                placeholder="Enter password"
              />
            </div>


            <div class="w-full flex flex-col items-start ">
              <button @click="onSubmit" class="w-full bg-[#555a5c] hover:bg-gray-500 flex flex-row items-center justify-center rounded-3xl p-3">
                <span class="text-[16px] text-black hover:text-gray-200 text-center">Sign In</span>
              </button>

              <span @click="$router.push('/auth?tab=signUp')" class="text-lg text-white hover:text-[#555a5c] text-left flex flex-row items-center justify-center cursor-pointer mt-1 ml-4">Sign up <svg class="mx-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="white" d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"/></svg></span>
              
            </div>

            
          </div>
        </div>

      </div>

      <Toast group="success" severity='success' :pt="{
                  container: {
                      style: 'background: #7fdbb4; margin: 10px; padding:5px; color: white'
                  }
            }"/>

      <Toast group="fail" severity='error' :pt="{
                  container: {
                      style: 'background: #CA3433; margin: 10px; padding:5px; color: white'
                  }
      }"/>

  </template>
  <script setup lang="ts">
  import { useForm } from 'vee-validate';
   import { toTypedSchema } from '@vee-validate/yup';
   import * as yup from 'yup';
   import { useToast } from "primevue/usetoast";
   import { FIREBASE_DB,FIREBASE_AUTH } from '../firebaseConfig';
   import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

  const toast = useToast();

  const showLoader = ref(false)
  const {objectToArray} = useConverters()
  const {queryUser} = useFireBase()
  const route = useRouter()
  const emit = defineEmits(['openSignup','openLogin'])  // Declare Events

  // const props = defineProps<{
  //   showLogin: boolean
  // }>()

  const { errors,handleSubmit, defineInputBinds,values,resetForm } = useForm({
      validationSchema: toTypedSchema(
        yup.object({
          email: yup.string().email().required(),
          password: yup.string().required(),
        })
      ),
  });

  async function onSuccess() {
      if(values.email && values.password){
        showLoader.value = true
        signInWithEmailAndPassword(FIREBASE_AUTH,values.email,values.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          showLoader.value = false
          toast.add({ severity: 'success', summary: 'Operation Successful', detail: 'Login Successfull', life: 3000, group:'success' });
          resetForm()
          route.push('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          showLoader.value = false
          toast.add({ severity: 'error', summary: 'operation not successful', detail:'Login Failed', life: 3000, group:'fail' });
        });
        
      }

  }

  function onInvalidSubmit() {
      const errorArray = objectToArray(errors.value)
      showLoader.value = false
      errorArray.forEach((error)=>{
        toast.add({ severity: 'error', summary: error.key, detail: error.value, life: 3000, group:'fail' });
      })
      
      resetForm()
  }

  const email = defineInputBinds('email');
  const password = defineInputBinds('password');


  const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);

  // Google Sign in

  const googleSignIn = async()=>{
    showLoader.value = true
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(FIREBASE_AUTH, provider);
    const user = response.user
    // showLoader.value = false
    // route.replace('/')
    // console.log(response.user)
    const userExists = await queryUser()

    if(userExists) { // if user already exists with same email we route forward
      showLoader.value = false
      return route.push('/');
    }

    showLoader.value = false
    emit('openSignup')

  }


  </script>
  <style>
  * {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }
  </style>