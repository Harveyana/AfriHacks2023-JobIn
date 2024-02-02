<template>
    <div class="w-[92%] border-t border-[#23282d] py-2 space-y-4 lg:space-y-6">

      <!-- Row 1 -->
        <!--contact Media-->
        <div class="w-full flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">Type</span>
          <BaseSelect :options="['Email Address','LinkedIn','X(twitter)','Github','Instagram','Facebook']" placeholder="Type" @optionChanged="(value:string)=>{ contact.type = value}" />
        </div>

      <!-- Row 2 -->
      <!-- contact Value-->
        <div class="w-full flex flex-col items-start justify-center ">
          <span class="text-sm text-[#555a5c] text-left ml-3 mb-2">{{contact.type}}</span>
          <input
            type="text"
            v-model="contact.value"
            :class="{ 'bg-transparent': contact.value == '' }" class="cabinet w-full border border-[#23282d] text-gray-400 text-sm h-full py-2.5 lg:py-3 px-4 rounded-3xl bg-[#12171d]"
            placeholder="example@mail.com"
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

  const emit = defineEmits(['addContact','cancel'])  // Declare Events

  const contact = reactive(
    {
      type:'Email Address',
      value:''
    }
  )

    const submit = ()=>{   //submits and validates form
    if(isFormValid(contact)){
      emit('addContact',contact)

    }
  }

  // const props = defineProps<{
  //     color: string;
  // }>()
  
  </script>