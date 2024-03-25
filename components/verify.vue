<template>
      <div class="w-full sm:w-[60%] lg:w-[75%] space-y-8 sm:space-y-4">

        <div class="w-full flex flex-col items-start justify-center space-y-4">
          <h1 v-if="!showLoader"  data-aos="fade-right" data-aos-once="true">
             <span class="blackCabinet text-4xl text-white font-bold" > Email Verified</span>
          </h1>
        </div>

        <div class="w-full lg:w-[80%] flex flex-col items-start justify-center space-y-4">

            
          <ProgressSpinner v-if="showLoader" class="" style="width: 100px; height: 100px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />



          <div v-else class="w-full flex flex-col items-center justify-center space-y-4">

            <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 1024 1024"><path fill="white" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"/></svg>

            <!-- <div class="w-full flex flex-col items-start "> -->
              <button @click="$router.push('/auth?tab=login')"" :class="{ 'bg-gray-400': isValidForm }" class="w-full bg-[#555a5c] hover:bg-gray-500 flex flex-row items-center justify-center rounded-3xl py-2">
                <span  class="text-[14px] text-black hover:text-gray-200 text-center">Login</span>
              </button>
                          
          </div>

          

        </div>

      </div>

      <BaseToast :model="toast.show" :success="toast.success" :title="toast.title" :description="toast.description" @close="toast.show = false"/>

  </template>
  <script setup lang="ts">
  // const pinValue = ref<string[]>([])

  // const handleComplete = (e: string[]) => alert(e.join(''))

  const showLoader = ref(false)
  const {verify} = useRequests()

  const toast = reactive({
    show:false,
    title:'',
    description:'',
    success:true
  })

  const initToast=(success:boolean,title:string,description:string)=>{
    toast.title = title
    toast.description = description
    toast.success = success
    toast.show = true
  }

  const route = useRoute()
  const router = useRouter()

 const verifyCode = ref(route.query.verifyCode || '');

  // const visible = ref(false)


  watch(verifyCode, async (newtab, oldtab) => {
    router.push({
          path: '/auth',
          query: { verifyCode: newtab },
    })
  })


  async function verifyEmail() {
          // Signed in 
          const response = await verify(verifyCode.value);
          if (response){
            showLoader.value = false
            initToast(true,'Email Verified','Email verified successfully')
          }else{
            initToast(true,'Failed','Email could not be verified')

          }

          // route.push('/')
          // ...
  }

  onMounted(()=>{
    verifyEmail()
  })



  


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