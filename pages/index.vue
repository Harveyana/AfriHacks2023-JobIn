<template>
  <div class="w-full z-10 h-screen overflow-hidden bg-[#f6f6f6] dark:bg-[#0b1015]">

    <!-- Container -->
    <section class="overflow-hidden w-full h-full grid grid-cols-12 gap-y-2 gap-x-4 pt-2 px-2 sm:px-4 ">

        <div class="hidden lg:flex h-[92%] col-span-12 lg:col-span-3">
          <div class="w-full h-full bg-white dark:bg-[#12171d] rounded-2xl p-4">

            <DocHistory />

    
          </div>
        </div>

        <div class="h-full mb-[2rem] sm:mb-0 flex flex-col items-center justify-start overflow-hidden col-span-12 lg:col-span-9">

          <div v-if="chatResponse !== ''" class="h-[85%] w-full overflow-hidden flex flex-col space-y-4 bg-white dark:bg-[#12171d] rounded-2xl px-2 py-3">

            <ChatRequest :data="description" :expanse="requestExpanse" @seeMore="onExpand()" @seeLess="onshrink()" />

            <ChatResponse :data="chatResponse" :expanse="responseExpanse" @seeMore="onshrink()" @seeLess="onExpand()" />
           
          </div>

          <div v-else class="h-[85%] w-full overflow-hidden flex flex-col items-center justify-center bg-white dark:bg-[#12171d] rounded-2xl px-2 py-3">

            <div class="flex flex-row items-center justify-center space-x-3">
              <img src="~/assets/img/logo/JobRoutes.svg" class="sm:w-16 dark:hidden"/>
              <img src="~/assets/img/logo/JobRoutesDark.svg" class="sm:w-16 hidden dark:flex"/>
              <h1
                class="text-lg lg:text-2xl text-black dark:text-white extraboldCabinet"
                >
                Welcome to JobRoutes
                
              </h1>
            </div>
            <p  class="text-xs sm:text-sm text-center text-gray-500 cabinet paragraph mx-14 mt-4">
                Paste the job description to get started
            </p>

          </div>

          <div  class="h-fit w-full flex flex-row items-center justify-between py-1 px-2 rounded-2xl mt-2">
            <input
              type="text"
              v-model="description"
              class="cabinet w-[85%] sm:w-[92%] border border-gray-300 dark:border-[#23282d] dark:text-gray-400 text-xs lg:text-sm h-full py-4 px-4 bg-white dark:bg-[#12171d] rounded-3xl"
              placeholder="Enter Job description here..."
            />
            <!-- <svg v-if="showLoader == false" @click="generate()" class=" dark:bg-white hover:bg-gray-800 stroke-black fill-black dark:hover:fill-black h-full border border-gray-400 rounded-[50%]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12.1886 6.01009C12.4554 6.03844 12.7133 6.12612 12.943 6.26767C13.227 6.44266 13.4568 6.6931 13.6067 6.99104L17.8079 15.3906C17.9316 15.6429 17.9972 15.9196 18 16.2005C17.9999 16.5005 17.9249 16.7956 17.7817 17.0592C17.6385 17.3228 17.4316 17.5464 17.18 17.7097C16.9283 17.873 16.6399 17.9709 16.3407 17.9945C16.0416 18.018 15.7414 17.9664 15.4673 17.8445L12.2444 16.4045C12.1664 16.3719 12.0828 16.355 11.9983 16.355C11.9138 16.355 11.8301 16.3719 11.7522 16.4045L8.52929 17.8445C8.19058 17.9943 7.81388 18.0361 7.45054 17.9641C7.08721 17.8922 6.75491 17.7099 6.49897 17.4423C6.24303 17.1746 6.0759 16.8346 6.02036 16.4685C5.96482 16.1024 6.02357 15.7281 6.18862 15.3966L10.3898 6.99704V6.99104C10.5398 6.6931 10.7695 6.44266 11.0536 6.26767C11.2855 6.12473 11.5462 6.03672 11.8158 6.00927C11.9389 5.98679 12.0656 5.98707 12.1886 6.01009Z" fill="#71787B" fill-opacity="0.4"/>
            </svg> -->
            <!-- <BaseToolTip text="Send"> -->
              
            <!-- </BaseToolTip> -->


            <DropdownMenuRoot v-model:open="toggleState" class="z-20">
              <DropdownMenuTrigger v-if="!showLoader"
                class="rounded-full z-20 w-12 h-12 inline-flex items-center justify-center text-grass11 bg-white outline-none hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                aria-label="Customise options"
              >
                <button  v-if="!showLoader" class="flex-none border border-black w-full h-full p-1 sm:px-4 mx-1 hover:bg-gray-600 dark:bg-white hover-bg-gray-200 dark:hover:bg-gray-400 flex items-center justify-center rounded-[50%]">
                  <svg class="flex-none" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M12.1886 6.01009C12.4554 6.03844 12.7133 6.12612 12.943 6.26767C13.227 6.44266 13.4568 6.6931 13.6067 6.99104L17.8079 15.3906C17.9316 15.6429 17.9972 15.9196 18 16.2005C17.9999 16.5005 17.9249 16.7956 17.7817 17.0592C17.6385 17.3228 17.4316 17.5464 17.18 17.7097C16.9283 17.873 16.6399 17.9709 16.3407 17.9945C16.0416 18.018 15.7414 17.9664 15.4673 17.8445L12.2444 16.4045C12.1664 16.3719 12.0828 16.355 11.9983 16.355C11.9138 16.355 11.8301 16.3719 11.7522 16.4045L8.52929 17.8445C8.19058 17.9943 7.81388 18.0361 7.45054 17.9641C7.08721 17.8922 6.75491 17.7099 6.49897 17.4423C6.24303 17.1746 6.0759 16.8346 6.02036 16.4685C5.96482 16.1024 6.02357 15.7281 6.18862 15.3966L10.3898 6.99704V6.99104C10.5398 6.6931 10.7695 6.44266 11.0536 6.26767C11.2855 6.12473 11.5462 6.03672 11.8158 6.00927C11.9389 5.98679 12.0656 5.98707 12.1886 6.01009Z" fill="#0B1015"/>
                  </svg>
                </button>
                
              </DropdownMenuTrigger>

              <DropdownMenuPortal class="z-20">
                <DropdownMenuContent
                  class="min-w-[250px] sm:min-w-[250px] absolute sm: z-20 -top-28 right-[50%] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                  :side-offset="5"
                >
                  <DropdownMenuItem
                    value="New Tab"
                    class="group cursor-pointer bg-gray-400 text-lg leading-none text-black rounded-[3px] flex items-center h-fit py-1.5 px-2 relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#12171d] data-[highlighted]:text-white"
                    @click="generate('resume')"
                  >
                    CV
                    <div
                    class="ml-auto text-xs pl-[20px] text-black group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                    >
                      (6 Docs left)
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    value="New Tab"
                    class="group cursor-pointer text-lg leading-none text-black rounded-[3px] flex items-center h-fit py-1.5 px-2 relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#12171d] data-[highlighted]:text-white"
                    @click="generate('coverLetter')"
                  >
                    Cover Letter
                    <div
                      class="ml-auto text-xs pl-[20px] text-black group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                    >
                      400 word count
                    </div>
                  </DropdownMenuItem>
                  
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenuRoot>
            
            <ProgressSpinner v-if="showLoader" class="" style="width: 50px; height: 50px" strokeWidth="8" fill="#ffff"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" 
           />
          </div>
          
          <!-- <BottomNav /> -->
        </div>

       

    </section>
  </div>
  
</template>

<script setup lang="ts">
import axios from 'axios';

  definePageMeta({
    middleware: [
      'auth',
      // Add in more middleware here
    ]
  });
  const state = useGlobalState()
  const user = state.user
const visible = ref(false)
const description = ref('')
const {getResume} = useGenerator()
const showLoader = ref(false)

const toggleState = ref(false)

const requestExpanse = ref(30)
const responseExpanse = ref(70)

const onExpand = ()=>{
  requestExpanse.value=70;responseExpanse.value=30
}

const onshrink = ()=>{
  requestExpanse.value=30;responseExpanse.value=70
}


const openDialog = ()=>{
  visible.value = true
}
const request = ref('')
const chatResponse = ref('')

const convertResumeToString = (resume:any)=> {
      let resumeString = '';

       // Loop through each section of the resume object
        for (const section in resume) {
          if (Array.isArray(resume[section])) {
            if (section === 'worK_EXPERIENCES') {
              // Handle work experiences separately
              resumeString += `${section}:\n`;
              resume[section].forEach((experience:any, index:number) => {
                resumeString += `Experience ${index + 1}:\n`;
                for (const key in experience) {
                  resumeString += `${key}: ${experience[key]}\n`;
                }
                resumeString += '\n';
              });
            } else {
              // For other arrays, join them with newline characters
              resumeString += `${section}:\n${resume[section].join('\n')}\n\n`;
            }
          } else if (typeof resume[section] === 'object') {
            // For nested objects, loop through each property and join them with newline characters
            for (const prop in resume[section]) {
              resumeString += `${prop}: ${resume[section][prop]}\n`;
            }
            resumeString += '\n';
          } else {
            resumeString += `${section}: ${resume[section]}\n\n`;
          }
        }

      return resumeString;
}

const generate = async (doc:string)=>{
      showLoader.value = true
      const response = await axios.post(`https://jobroutes-backend.onrender.com/api/generate/${doc}`, {
        userDetails: user.value.userDetails,
        description: description.value
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      // chatResponse.value = response.data
      // const stringData = convertResumeToString(response.data)
      // console.log(stringData)
      chatResponse.value = response.data
      // chatResponse.value = stringData
      showLoader.value = false
      
  // const response = await getCoverLetter(description.value)
  // request.value = 
  
  

}
      
</script>

<style scoped>
.cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
}
.extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
}
</style>