<template>
    <div class="w-[92%] border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">

      <!-- Row 1 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Year Issued -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Issued<span class="text-red-600 text-lg">*</span></h2>
          <BaseSelect :options="['1999','2000','2001','2002','2003','2004','2005']" placeholder="Year issued" @optionChanged="(value:string)=>{ certification.yearIssued = value}" />
        </div>
        <!-- Year Expires -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Expires<span class="text-red-600 text-lg">*</span></h2>
          <BaseSelect :options="['1999','2000','2001','2002','2003','2004','2005','Never']" placeholder="Expires" @optionChanged="(value:string)=>{ certification.yearExpires = value}" />
        </div>

      </div>

      <!-- Row 2 -->
      <div class="w-full flex flex-row items-center justify-between space-x-2 lg:space-x-4">
        <!-- Name -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Name<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="certification.name"
            :class="{ 'bg-transparent': certification.name == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="Certification name"
          />
        </div>
        <!-- Organization -->
        <div class="w-1/2 flex flex-col items-start justify-center ">
          <h2 class="text-sm text-[#555a5c] text-left ml-3 mb-2">Organization<span class="text-red-600 text-lg">*</span></h2>
          <input
            type="text"
            v-model="certification.organisation"
            :class="{ 'bg-transparent': certification.organisation == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="Issuing organization"
          />
        </div>

      </div>


      <!-- Row 3 -->
        <!-- Url -->
        <div class="w-full flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">URL</span>
          <input
            type="text"
            v-model="certification.url"
            :class="{ 'bg-transparent': certification.url == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="https://example.com"
          />
      </div>

      <!-- Row 4 -->
      <!-- Description-->
      <div class="w-full flex flex-col items-start justify-center ">
        <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Description</span>
        <textarea
          v-model="certification.description"
          :class="{ 'bg-transparent': certification.description == '' }"
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

  const emit = defineEmits(['addCertificate','cancel'])  // Declare Events

  const certification = reactive(
    {
      yearIssued:'',
      yearExpires:'',
      name:'',
      organisation:'',
      url:'',
      description:''
    }
  )

    const submit = ()=>{   //submits and validates form
    if(isFormValid(certification)){
      emit('addCertificate',certification)

    }
  }

  // const props = defineProps<{
  //     color: string;
  // }>()
  
  </script>