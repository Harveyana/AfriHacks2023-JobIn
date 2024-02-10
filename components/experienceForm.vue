<template>
    <div class="w-[92%] border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">

      <!-- Row 1 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- From -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">From<span class="text-red-600 text-lg">*</span></h2>
          <BaseSelect :options="['1999','2000','2001','2002','2003','2004','2005']" placeholder="Year started" @optionChanged="(value:string)=>{ experience.yearStarted = value}" />
        </div>
        <!-- TO -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">To<span class="text-red-600 text-lg">*</span></h2>
          <BaseSelect :options="['1999','2000','2001','2002','2003','2004','2005','Now']" placeholder="Year ended" @optionChanged="(value:string)=>{ experience.yearEnded = value}" />
        </div>

      </div>

      <!-- Row 2 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Title -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Title<span class="text-red-600 text-lg">*</span></span>
          <input
            type="text"
            v-model="experience.title"
            :class="{ 'bg-transparent': experience.title == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder=""
          />
        </div>
        <!-- Title -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Company<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="experience.company"
            :class="{ 'bg-transparent': experience.company == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder=""
          />
        </div>

      </div>

      <!-- Row 3 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Location -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Location</h2>
          <input
            type="text"
            v-model="experience.location"
            :class="{ 'bg-transparent': experience.location == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder=""
          />
        </div>
        <!-- URL -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">URL</h2>
          <input
            type="text"
            v-model="experience.url"
            :class="{ 'bg-transparent': experience.url == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder=""
          />
        </div>

      </div>

      <!-- Row 4 -->
      <div v-for="(description, index) in experience.descriptions" :key="index" class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Description -->
        <div class="w-[80%] flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">{{`Description ${index + 1}`}}<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="experience.descriptions[index]"
            :class="{ 'bg-transparent': experience.descriptions[index] == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder=""
          />
        </div>
        <!-- Add and Delete button -->
        <div class="w-[20%] flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Add</span>
          <div class="w-full space-x-2 flex flex-row items-center justify-between">
            <button @click="deleteDescription(index)" class="extraboldCabinet w-1/2 border text-xs lg:text-lg hover:bg-red-700 bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl p-1 lg:p-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12"><path fill="white" d="M5 3h2a1 1 0 0 0-2 0M4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zM5 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M3.38 9.085a1 1 0 0 0 .997.915h3.246a1 1 0 0 0 .996-.915L9.055 4h-6.11z"/></svg>
            </button>
            <button @click="addDescription()" class="extraboldCabinet w-1/2 border text-xs lg:text-lg hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl p-1 lg:p-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="white" d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"/></svg>
            </button>
          </div>
          
        </div>

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

  const emit = defineEmits(['addExperience','cancel'])  // Declare Events

  const experience = reactive(
    {
      yearStarted:'',
      yearEnded:'',
      title:'',
      company:'',
      location:'',
      url:'',
      descriptions:['']
    }
  )

    const submit = ()=>{   //submits and validates form
    if(isFormValid(experience)){
      emit('addExperience',experience)

    }
  }

  const addDescription = () => {
    experience.descriptions.push(''); // Add an empty string for a new description
  };

  const deleteDescription = (index:number) => {
    if(index !== 0) experience.descriptions.splice(index, 1); // Remove the description at the specified index
  };

  // const props = defineProps<{
  //     color: string;
  // }>()
  
  </script>