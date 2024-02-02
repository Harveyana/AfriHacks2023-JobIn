<template>
     <div
        class="col-span-12 rounded-2xl outline-none bg-[#f6f6f6] dark:bg-[#0b1015] flex items-start justify-center"
      :value="props.value"
      >

      <div class="overflow-visible flex flex-col items-center justify-center w-full lg:w-1/2 p-4 rounded-2xl bg-white dark:bg-[#12171d] space-y-8">
        <h1 class="cabinetGroteskBlack font-bold text-xl dark:text-white text-left ml-3 mr-auto mb-2">NOTIFICATIONS</h1>
        <span @click="toggleTheme()" class="text-lg dark:text-white text-black text-left mr-auto ml-3 mb-2">Email notifcations</span>

        <div class="w-[95%] flex justify-between items-center mx-12">
          
          <label class="text-sm text-[#555a5c] select-none leading-none" for="notification">
            Subscribe to push notifications
          </label>
          <SwitchRoot
            id="notification"
            v-model:checked="switchState"
            class="w-[48px] h-[25px] focus-within:outline focus-within:outline-black flex bg-gray-500 shadow-sm rounded-full relative data-[state=checked]:bg-green-500 cursor-default"
          >
            <SwitchThumb
              class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
            />
          </SwitchRoot>
        </div>

        <div class="w-[95%] flex justify-between items-center">
          
          <label class="text-sm text-[#555a5c] w-[70%] select-none leading-none" for="notification">
            Receive push notifications on mentions and comments via your mobile app
          </label>
          <SwitchRoot
            id="notification"
            v-model:checked="switchState"
            class="w-[48px] h-[25px] focus-within:outline focus-within:outline-black flex bg-gray-500 shadow-sm rounded-full relative data-[state=checked]:bg-green-500 cursor-default"
          >
            <SwitchThumb
              class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
            />
          </SwitchRoot>
        </div>

        <Separator
          class="bg-[#555a5c] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]"
        />
        
        <div class="w-full flex flex-col items-start justify-center space-y-3">
            <h1 class="cabinetGroteskBlack font-bold text-xl dark:text-white text-left ml-3 mr-auto">APPEARANCE</h1>
            <div class="w-[95%] flex justify-between items-center ml-3">
              
              <label class="text-sm text-[#555a5c] select-none leading-none" for="notification">
                Customize how JobRoutes looks on your device
              </label>
              <div class="w-[30%]">
                <BaseSelect :options="['Dark','Light']" placeholder="Mode" @optionChanged="(value:string)=>{ toggleTheme()}" />
              </div>
            </div>
              
        </div>


        
      </div>
                    
                 
    </div>
  </template>

  
  <script setup lang="ts">

  // const mode = ref('Light')
  const colorMode = useColorMode();


  // import { useDark, useToggle } from '@vueuse/core'

  //   const isDark = useDark()
  //   const toggleDark = useToggle(isDark)

  // const changeMode = (mode:string)=>{
  //   if(mode ==='Dark')document.documentElement.classList.add('dark')
  //   else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }

  const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
  };
  

  const state = useGlobalState()
  const user = state.user

  const switchState = ref(false)


  
  const props = defineProps<{
    value:string
  }>()


  </script>
  <style scoped>
  .cabinet{
    font-family: 'cabinetGrotesk', sans-serif;
  }

  .extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
  }

  .blackCabinet{
    font-family: 'cabinetGroteskBlack', sans-serif;
  }
  </style>
  