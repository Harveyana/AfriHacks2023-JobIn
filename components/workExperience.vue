<template>
  <div class="w-full">
    <div class="w-full ">
      
      <section v-if="display=='experience'" class="w-full bg-[#12171d] rounded-3xl flex flex-col items-center justify-center space-y-4 lg:space-y-8 py-6">
        
        <!-- Data -->
        <div v-if="experiences.length" class="w-full h-full bg-[#12171d] rounded-3xl flex flex-col items-center justify-start">

          <div class="w-full flex flex-row items-center justify-between px-5 mb-4">
            <h1
              class="text-2xl text-white extraboldCabinet"
              >
              Add Work Experience
            </h1>

            <button @click="display='form'" class="extraboldCabinet border text-xs lg:text-lg hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl px-4 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"/></svg>
            </button>
          </div>
           <Experience :experiences="experiences" @delete="(index)=>{deleteExperience(index)}" />
         
        </div>

        <!-- Data placeholder -->
        <PlaceHolder :step="0" v-else @alternate="display='form'"/>
        
      </section>


      <section v-if="display=='form'" class="bg-[#0b1015] rounded-3xl w-full flex flex-col items-center justify-center space-y-2 lg:space-y-2 py-4">

        <div class="w-full flex flex-row items-center justify-between px-5">
          <h1
            class="text-2xl text-white extraboldCabinet"
            >
            Add Work Experience
          </h1>

          <button v-if="false" @click="" class="extraboldCabinet border text-xs lg:text-lg hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl px-4 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"/></svg>
          </button>
        </div>

        <!-- Form-->
        <ExperienceForm @addExperience="(experience)=>{addExperience(experience)}"  @cancel="display = 'experience'"/> 


      </section>

    </div>
    <!-- NavButtons -->
    <div v-if="display=='experience'" class="w-full flex flex-row items-center justify-center space-x-8 my-4">
      <button @click="$emit('previous')" class="extraboldCabinet hover:bg-gray-600 text-xs text-white lg:text-lg w-1/2 border flex flex-row items-center justify-center rounded-3xl p-2.5">
        <span>Previous</span>
      </button>

      <button @click="submit" class="extraboldCabinet text-xs lg:text-lg w-1/2 hover:bg-white bg-gray-500 flex flex-row items-center justify-center rounded-3xl p-2.5">
        <span v-if="experiences.length" class="text-black">Next</span>
        <span v-else class="text-black">Skip</span>
      </button>

      <ProgressSpinner v-if="showLoader" class="" style="width: 40px; height: 40px" strokeWidth="8" fill="#0000"
        animationDuration=".5s" aria-label="Custom ProgressSpinner" 
      />

    </div>
  </div>

  </template>

  <script setup lang="ts">

  import type { experience } from '../interfaces';

  
  const {updateUserDetails} = useFireBase()
  const emit = defineEmits(['next','previous'])

  const showLoader = ref(false)

  const state = useGlobalState()
  const userdetail = computed(() => state.user.value?.userDetails)

  const display = ref('experience')
  const experiences = ref<experience[]>(userdetail.value?.experience ? [...userdetail.value.experience] : [])

  const addExperience = (data:experience)=>{   // Add experience to array of experiences 
    experiences.value.push(data);
    display.value = 'experience'
    console.log(experiences)
  }

  const deleteExperience = (index:number) => {   // Remove experience from array of experiences
    experiences.value.splice(index, 1);
  };    
  
  const submit = async()=>{
    
    if (experiences.value[0]){
      showLoader.value = true
      const formSaved = await updateUserDetails('experience',experiences.value)
      if(formSaved) emit('next');return showLoader.value = false
    }
    return emit('next');

  }

  // const props = defineProps<{
  //     color: string;
  // }>()
  
  </script>
  <style scoped>
  .cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
  }

  .extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
  }

  </style>