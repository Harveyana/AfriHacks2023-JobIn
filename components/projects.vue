<template>
  <div class="w-full">
    <div class="w-full ">
      
      <section v-if="display=='project'" class="w-full bg-[#12171d] rounded-3xl flex flex-col items-center justify-center space-y-4 lg:space-y-8 py-6">
        
        <!-- Data -->
        <div v-if="projects.length" class="w-full h-full bg-[#12171d] rounded-3xl flex flex-col items-center justify-start">

          <div class="w-full flex flex-row items-center justify-between px-5 mb-4">
            <h1
              class="text-2xl text-white extraboldCabinet"
              >
              Projects
            </h1>

            <button @click="display='form'" class="extraboldCabinet border text-xs lg:text-lg hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl px-4 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"/></svg>
            </button>
          </div>

           <Project :projects="projects" @delete="(index)=>{deleteProject(index)}" />
         
        </div>

        <!-- Alternate Display -->
        <PlaceHolder :step="2" v-else @alternate="display='form'"/>

        
      </section>


      <section v-if="display=='form'" class="bg-[#0b1015] rounded-3xl w-full flex flex-col items-center justify-center space-y-2 lg:space-y-2 py-4">

        <div class="w-full flex flex-row items-center justify-between px-5">
          <h1
            class="text-2xl text-white extraboldCabinet"
            >
            Add Project
          </h1>

          <button v-if="false" @click="" class="extraboldCabinet border text-xs lg:text-lg hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl px-4 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"/></svg>
          </button>
        </div>

        <!-- Form-->
        <ProjectForm @addProject="(project)=>{addProject(project)}"  @cancel="display = 'project'"/> 

      </section>

      

    </div>

    <!-- NavButtons -->
    <div v-if="display=='project'" class="w-full flex flex-row items-center justify-center space-x-8 my-4">
      <button @click="$emit('previous')" class="extraboldCabinet hover:bg-gray-600 text-xs text-white lg:text-lg w-1/2 border flex flex-row items-center justify-center rounded-3xl p-2.5">
        <span>Previous</span>
      </button>

      <button v-if="!showLoader" @click="submit" class="extraboldCabinet text-xs lg:text-lg w-1/2 hover:bg-white bg-gray-500 flex flex-row items-center justify-center rounded-3xl p-2.5">
        <span class="text-black">Next</span>
      </button>

      <ProgressSpinner v-if="showLoader" class="" style="width: 40px; height: 40px" strokeWidth="8" fill="#0000"
        animationDuration=".5s" aria-label="Custom ProgressSpinner" 
      />

    </div>

  </div>
      

  </template>

  <script setup lang="ts">
  import type { project } from '../interfaces';

  const {updateUserDetails} = useFireBase()
  const emit = defineEmits(['next','previous'])
  const showLoader = ref(false)

  const display = ref('project')
  const projects = ref<project[]>([])

  const addProject = (data:project)=>{   // Add project to array of projects 
    projects.value.push(data);
    display.value = 'project'
    console.log(projects)
  }

  const deleteProject = (index:number) => {   // Remove project from array of projects
    projects.value.splice(index, 1);
  };    
  
  const submit = async()=>{
    if(projects.value[0]){
      showLoader.value = true
      const formSaved = await updateUserDetails('projects',projects.value)
      if(formSaved) emit('next');showLoader.value = false
    }
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