<template>
      <div class="w-full sm:w-[60%] lg:w-[40%] space-y-8 sm:space-y-12">

        <div class="w-full flex flex-col items-center justify-center space-y-5">
          <h1 v-if="showLoader == false" class="text-5xl text-white font-bold" data-aos="fade-right" data-aos-once="true">
            Sign Up
          </h1>
          <p v-if="showLoader == false" class="text-xl text-[#555a5c] text-center flex flex-row items-center justify-center">
            Start for free, Ugrade when you <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.95543 2.1743L6.96621 2.18689L6.978 2.19854L7.5332 2.74727C7.79188 3.00295 8.20812 3.00295 8.46681 2.74727L9.022 2.19854L9.03379 2.18689L9.04457 2.1743C10.2043 0.819787 12.2563 0.676153 13.6153 1.8423C14.9523 2.98954 15.235 5.41794 13.9179 7.37964C13.4607 8.06058 12.5979 8.97809 11.638 9.90519C10.6853 10.8255 9.66131 11.7322 8.90168 12.3874C8.38038 12.837 7.61692 12.8383 7.09429 12.3905C6.33011 11.7357 5.29897 10.8283 4.34004 9.9072C3.3739 8.97913 2.50637 8.06075 2.04906 7.37964C0.739652 5.42941 1.0859 2.9975 2.43219 1.8423C3.79071 0.676606 5.79522 0.819263 6.95543 2.1743Z" fill="#FF7051" stroke="#12171D" stroke-width="0.796875" stroke-linecap="round"/>
              </svg></span>it
          </p>
          <ProgressSpinner v-if="showLoader" class="-mt-8" style="width: 100px; height: 100px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />
        </div>

        <div class="w-full flex flex-col items-center justify-center space-y-8 px-12">
          <button @click="googleSignup()" class="w-full flex flex-row hover:bg-gray-600 items-center justify-center border-2  border-white rounded-3xl p-1.5">
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
                type="text"
                class="w-full border-[#555a5c] border text-gray-400 text-sm py-3 px-4 bg-[#12171d] rounded-3xl"
                placeholder="Enter email address..."
              />
            </div>

            <button @click="onSubmit" class="w-full bg-[#555a5c] hover:bg-gray-500 flex flex-row items-center justify-center rounded-3xl p-3">
              <span class="text-[16px] text-black hover:text-gray-200 text-center">Create Account</span>
            </button>

            <span @click="$emit('openLogin')" class="text-sm text-[#555a5c] text-left flex flex-row items-center justify-center cursor-pointer">Login <svg class="mx-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="white" d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"/></svg></span>
            
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
   import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";


  const toast = useToast();
  const {addUser} = useFireBase()
  const route = useRouter()

  const showLoader = ref(false)
  const {objectToArray} = useConverters()

  // const props = defineProps<{
  //   showSignup: boolean
  // }>()

  const { errors,handleSubmit, defineInputBinds,values,resetForm } = useForm({
      validationSchema: toTypedSchema(
        yup.object({
          email: yup.string().email().required(),
          password: yup.string().required(),
        })
      ),
  });

  type user = {
  uid:string;
  displayName:string;
  email:string;
  phoneNumber:string;
} 

  async function onSuccess() {
      if(values.email && values.password){
        showLoader.value = true
        createUserWithEmailAndPassword(FIREBASE_AUTH, values.email, values.password)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          const profile = {uid:user.uid,displayName:user.displayName,email:user.email,phoneNumber:user.phoneNumber}
          await addUser(profile)
          // if(response){
            showLoader.value = false
            toast.add({ severity: 'success', summary: 'Operation Successful', detail: 'Account created ', life: 3000, group:'success' });
            resetForm()
            route.push('/')
          // }
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          return false
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

  // async function googleAuth(){
  //   const response = await googleSignup()
  //   // console.log(response)
  // }

  async function googleSignup(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(FIREBASE_AUTH, provider)
    .then(async(userCredential) => {
      const user = userCredential.user;
      const profile = {uid:user.uid,displayName:user.displayName,email:user.email,phoneNumber:user.phoneNumber}
      const response = await addUser(profile)
      if(response){
        showLoader.value = false
        toast.add({ severity: 'success', summary: 'Operation Successful', detail: 'Account created ', life: 3000, group:'success' });
        resetForm()
      }      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  }



  </script>