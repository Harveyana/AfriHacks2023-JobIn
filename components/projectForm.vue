<template>
    <div class="w-[92%] border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">

      <!-- Row 1 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Title -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Title<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="project.title"
            :class="{ 'bg-transparent': project.title == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="project name"
          />
        </div>
        <!-- Year -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Year<span class="text-red-600 text-lg">*</span></h2>
          <BaseSelect :options="['1999','2000','2001','2002','2003','2004','2005','Now']" placeholder="Project Year" @optionChanged="(value:string)=>{ project.year = value}" />
        </div>

      </div>

      <!-- Row 2 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Client -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Company or client<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="project.client"
            :class="{ 'bg-transparent': project.client == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="Company name"
          />
        </div>
        <!-- URL -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Link to project</span>
          <input
            type="text"
            v-model="project.url"
            :class="{ 'bg-transparent': project.url == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="https://example.com"
          />
        </div>

      </div>

      <!-- Row 3 -->
      <!-- Description-->
      <div class="w-full flex flex-col items-start justify-center ">
        <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Description</span>
        <textarea
          v-model="project.description"
          :class="{ 'bg-transparent': project.description == '' }"
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

    </div>
  </template>

  <script setup lang="ts">
  const {isFormValid} = useFormValidator()

  const emit = defineEmits(['addProject','cancel'])  // Declare Events

  const project = reactive(
    {
      title:'',
      year:'',
      client:'',
      url:'',
      description:''
    }
  )

    const submit = ()=>{   //submits and validates form
    if(isFormValid(project)){
      emit('addProject',project)

    }
  }

  // const props = defineProps<{
  //     color: string;
  // }>()
  
  </script>