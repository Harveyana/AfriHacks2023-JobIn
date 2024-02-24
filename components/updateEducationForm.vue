<template>
    <form class="w-[92%] border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">

      <!-- Row 1 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- From -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">From<span class="text-red-600 text-lg">*</span></h2>
          <BaseSelect :options="['1999','2000','2001','2002','2003','2004','2005']" :placeholder="props.education.yearStarted" @optionChanged="(value:string)=>{ education.yearStarted = value}" />
        </div>
        <!-- TO -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">To<span class="text-red-600 text-lg">*</span></h2>
          <BaseSelect :options="['1999','2000','2001','2002','2003','2004','2005','Now']" :placeholder="props.education.yearEnded" @optionChanged="(value:string)=>{ education.yearEnded = value}" />
        </div>

      </div>

      <!-- Row 2 -->
        <!-- Degree or certification -->
      <div class="w-full flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Degree or certification<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="education.certification"
            :class="{ 'bg-transparent': education.certification == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="Artist, chef, etc"
          />
      </div>


      <!-- Row 3 -->
        <!-- School of institution -->
        <div class="w-full flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">School or institution<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="education.institution"
            :class="{ 'bg-transparent': education.institution == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="University of Abuja"
          />
      </div>
        


      <!-- Row 4 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Location -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Location</span>
          <input
            type="text"
            v-model="education.location"
            :class="{ 'bg-transparent': education.location == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="Where was it"
          />
        </div>
        <!-- URL -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">URL</span>
          <input
            type="text"
            v-model="education.url"
            :class="{ 'bg-transparent': education.url == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="https://example.com"
          />
        </div>

      </div>

      <!-- Row 5 -->
      <!-- Description-->
      <div class="w-full flex flex-col items-start justify-center ">
        <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Description</span>
        <textarea
          v-model="education.description"
          :class="{ 'bg-transparent': education.description == '' }"
          class="w-full cabinet border border-[#23282d] text-gray-400 text-sm h-full p-6 bg-[#12171d] resize-none rounded-3xl"
          placeholder="Add some details"
        />
      </div>

      <div class="w-full flex flex-row items-center justify-end space-x-8 my-4">

         <button @click="$emit('cancel')" class="extraboldCabinet text-xs lg:text-lg w-[20%]">
          <span class="text-white hover:text-gray-400">Cancel</span>
        </button>

        <button @click="submit" class="extraboldCabinet hover:bg-gray-600 text-xs text-white lg:text-lg w-[30%] border flex flex-row items-center justify-center rounded-3xl p-2.5">
          <span>Save</span>
        </button>

      </div>

    </form>
  </template>

  <script setup lang="ts">
  import type { education } from '../interfaces';

  const {isFormValid} = useFormValidator()

  const emit = defineEmits(['updateEducation','cancel'])  // Declare Events

  const props = defineProps<{
      education: education;
  }>()
  

  const education = reactive(
    {
      yearStarted:props.education.yearStarted||'',
      yearEnded:props.education.yearEnded||'',
      certification:props.education.certification||'',
      institution:props.education.institution||'',
      location:props.education.location||'',
      url:props.education.url||'',
      description:props.education.description||''
    }
  )

    const submit = ()=>{   //submits and validates form
    if(isFormValid(education)){
      emit('updateEducation',education)

    }
  }

  
  </script>