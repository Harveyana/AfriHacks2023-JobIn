<template>
    <section class="w-full flex flex-col items-center justify-center space-y-4 lg:space-y-6 py-4">
      <!-- Name -->
      <div class="w-full flex flex-col items-start justify-center ">
        <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">First and last name <span class="text-red-600 text-lg">*</span></h2>
        <input
          type="text"
          v-model="general.name"
          :class="{ 'bg-transparent': general.name == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-4 px-4 rounded-3xl bg-[#12171d]"
          placeholder="Enter full name"
        />
      </div>

      <!-- Select Occupation -->
      <div class="w-full flex flex-col items-start justify-center ">
        <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">What do you do?<span class="text-red-600 text-lg">*</span></h2>
        <BaseSelect :options="['Design','Engineering','Doctor']" placeholder="What do you do?" @optionChanged="(value:string)=>{ general.occupation = value}" />
      </div>

      <!-- Location -->
      <div class="w-full flex flex-col items-start justify-center ">
        <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Location<span class="text-red-600 text-lg">*</span></h2>
        <input
          type="text"
          v-model="general.location"
          :class="{ 'bg-transparent': general.location == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-4 px-4 rounded-3xl bg-[#12171d]"
          placeholder="state, country"
        />
      </div>

      <!-- About-->
      <div class="w-full flex flex-col items-start justify-center ">
        <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">About<span class="text-red-600 text-lg">*</span></h2>
        <textarea
          v-model="general.bio"
          :class="{ 'bg-transparent': general.bio == '' }"
          class="w-full cabinet border border-[#23282d] text-gray-400 text-sm h-full p-6 bg-[#12171d] resize-none rounded-3xl"
          placeholder="Enter a bio about yourself"
        />
      </div>

      <!-- NavButtons -->
      <div class="w-full flex flex-row items-center justify-end space-x-8">
        <!-- <button @click="$emit('previous')" class="extraboldCabinet hover:bg-gray-600 text-xs text-white lg:text-lg w-1/2 border flex flex-row items-center justify-center rounded-3xl p-2.5">
          <span>Previous</span>
        </button> -->

        <button v-if="!showLoader" @click="submit" class="extraboldCabinet text-xs lg:text-lg w-[40%] hover:bg-white bg-gray-500 flex flex-row items-center justify-center rounded-3xl p-2.5">
          <span class="text-black">Next</span>
        </button>

        <ProgressSpinner v-if="showLoader" class="" style="width: 40px; height: 40px" strokeWidth="8" fill="#0000"
          animationDuration=".5s" aria-label="Custom ProgressSpinner" 
        />

      </div>
    </section>
  </template>

  <script setup lang="ts">
  const {updateUser} = useFireBase()
  const {isFormValid} = useFormValidator()
  const emit = defineEmits(['next']) 
  const general = reactive(
    {
      name:'',
      occupation:'',
      location:'',
      bio:''
    }
  )
  const showLoader = ref(false)

  const submit = async()=>{
    showLoader.value = true
    if(isFormValid(general)){
      const formSaved = await updateUser('userDetails',general)
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