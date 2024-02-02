<template >
  <div class="w-full h-fit grid grid-cols-10 gap-x-3">


    <!-- Form navigation -->
    <div class="col-span-10 sm:col-span-3 space-x-2 sm:space-x-0 sm:space-y-3 sm:px-4 lg:px-20 flex flex-wrap flex-row sm:flex-col items-center justify-center sm:justify-start">
    
      <button @click="FormNav='general'" :class="{ 'bg-white text-black': FormNav == 'general' }" class="extraboldCabinet text-xs lg:text-sm w-fit sm:w-full border border-[#555a5c] flex flex-row items-start justify-start rounded-3xl p-2.5 my-1 sm:my-0">
        <span :class="FormNav == 'general'? 'text-black':'text-[#555a5c]'">General</span>
      </button>

      <button @click="FormNav='workExperience'" :class="{ 'bg-white text-black ': FormNav == 'workExperience' }" class="extraboldCabinet text-xs lg:text-sm w-fit sm:w-full border border-[#555a5c] flex flex-row items-start justify-start rounded-3xl p-2.5 my-1 sm:my-0">
        <span :class="FormNav == 'workExperience'? 'text-black':'text-[#555a5c]'">Work Experience</span>
      </button>

      <button @click="FormNav='education'" :class="{ 'bg-white text-black': FormNav == 'education' }" class="extraboldCabinet text-xs lg:text-sm w-fit sm:w-full border border-[#555a5c] flex flex-row items-start justify-start rounded-3xl p-2.5 my-1 sm:my-0">
        <span :class="FormNav == 'education'? 'text-black':'text-[#555a5c]'">Education</span>
      </button>

      <button @click="FormNav='projects'" :class="{ 'bg-white text-black': FormNav == 'projects' }" class="extraboldCabinet text-xs lg:text-sm w-fit sm:w-full border border-[#555a5c] flex flex-row items-start justify-start rounded-3xl p-2.5 my-1 sm:my-0">
        <span :class="FormNav == 'projects'? 'text-black':'text-[#555a5c]'">Projects</span>
      </button>

      <button @click="FormNav='certifications'" :class="{ 'bg-white text-black': FormNav == 'certifications' }" class="extraboldCabinet text-xs lg:text-sm w-fit sm:w-full border border-[#555a5c] flex flex-row items-start justify-start rounded-3xl p-2.5 my-1 sm:my-0">
        <span :class="FormNav == 'certifications'? 'text-black':'text-[#555a5c]'">Certifications</span>
      </button>

      <div class="w-fit sm:w-full flex flex-row items-start justify-start space-x-2">
         <button @click="FormNav='skills'" :class="{ 'bg-white text-black': FormNav == 'skills' }" class="extraboldCabinet text-xs lg:text-sm w-fit sm:w-1/2 border border-[#555a5c] flex flex-row items-start justify-start rounded-3xl p-2.5 my-1 sm:my-0">
          <span :class="FormNav == 'skills'? 'text-black':'text-[#555a5c]'">Skills</span>
        </button>

        <button @click="FormNav='contact'" :class="{ 'bg-white text-black': FormNav == 'contact' }" class="extraboldCabinet text-xs lg:text-sm w-fit sm:w-1/2 border border-[#555a5c] flex flex-row items-start justify-start rounded-3xl p-2.5 my-1 sm:my-0">
          <span :class="FormNav == 'contact'? 'text-black':'text-[#555a5c]'">Contact</span>
        </button>
      </div>
     
    </div>

    <!-- Form Inputs -->
    <div class="col-span-10 sm:col-span-4 space-y-4 flex flex-col items-center justify-start px-2 lg:px-4 border-t border-[#23282d] pt-4">
    
      <General v-if="FormNav == 'general'" @next="FormNav = 'workExperience'"/>
      <WorkExperience v-if="FormNav == 'workExperience'" @next="FormNav ='education'" @previous="FormNav='general'"/>
      <EducationBackground v-if="FormNav == 'education'" @next="FormNav ='projects'" @previous="FormNav='workExperience'"/>
      <Projects v-if="FormNav == 'projects'" @next="FormNav ='certifications'" @previous="FormNav='education'"/>
      <Certifications v-if="FormNav == 'certifications'" @next="FormNav ='skills'" @previous="FormNav='projects'"/>
      <Skills v-if="FormNav == 'skills'" @next="FormNav ='contact'" @previous="FormNav='certifications'"/>
      <Contacts v-if="FormNav == 'contact'" @previous="FormNav='skills'"/>


    </div>

  </div>
   
    
  </template>

  <script setup lang="ts">

    const FormNav = ref('general')
    // const props = defineProps<{
    //     url: string
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