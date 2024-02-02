<template>
  <div class="w-full">
    <div class="w-full ">
      
      <section v-if="display=='contacts'" class="w-full bg-[#12171d] rounded-3xl flex flex-col items-center justify-center space-y-4 lg:space-y-8 py-6">
        
        <!-- Data -->
        <div v-if="contacts.length" class="w-full h-full bg-[#12171d] rounded-3xl flex flex-col items-center justify-start">

          <div class="w-full flex flex-row items-center justify-between px-5 mb-4">
            <h1
              class="text-2xl text-white extraboldCabinet"
              >
              Contacts
            </h1>

            <button @click="display='form'" class="extraboldCabinet border text-xs lg:text-lg hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl px-4 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"/></svg>
            </button>
          </div>

           <contact :contacts="contacts" @delete="(index)=>{deleteContact(index)}" />
         
        </div>

        <!-- Alternate Display -->
        <PlaceHolder :step="5" v-else @alternate="display='form'"/>

        
      </section>


      <section v-if="display=='form'" class="bg-[#0b1015] rounded-3xl w-full flex flex-col items-center justify-center space-y-2 lg:space-y-2 py-4">

        <div class="w-full flex flex-row items-center justify-between px-5">
          <h1
            class="text-2xl text-white extraboldCabinet"
            >
            Add Contact
          </h1>

          <button v-if="false" @click="" class="extraboldCabinet border text-xs lg:text-lg hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl px-4 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"/></svg>
          </button>
        </div>

        <!-- Form-->
        <contactForm @addContact="(contact)=>{addContact(contact)}"  @cancel="display = 'contact'"/> 

      </section>

      

    </div>

    <!-- NavButtons -->
    <div v-if="display=='contacts'" class="w-full flex flex-row items-center justify-center space-x-8 my-4">
      <button @click="$emit('previous')" class="extraboldCabinet hover:bg-gray-600 text-xs text-white lg:text-lg w-[40%] border flex flex-row items-center justify-center rounded-3xl p-2.5">
        <span>Previous</span>
      </button>

      <button v-if="!showLoader" @click="submit" class="extraboldCabinet text-xs lg:text-lg w-fit hover:bg-white bg-gray-500 flex flex-row items-center justify-center rounded-3xl p-2.5">
        <span class="text-black">Finish Account Setup</span>
      </button>

      <ProgressSpinner v-if="showLoader" class="" style="width: 40px; height: 40px" strokeWidth="8" fill="#0000"
        animationDuration=".5s" aria-label="Custom ProgressSpinner" 
      />

    </div>

  </div>
      

  </template>

  <script setup lang="ts">
  import type { contact } from '../interfaces';

  const {updateUserDetails,updateUserKey} = useFireBase()
  const emit = defineEmits(['next','previous'])
  const showLoader = ref(false)

  const state = useGlobalState()

  const openConfirmedDialogue = state.showConfirmDialogue  // open confirmation state


  const display = ref('contacts')
  const contacts = ref<contact[]>([])

  const addContact= (data:contact)=>{   // Add contact to array of contacts 
    contacts.value.push(data);
    display.value = 'contacts'
    console.log(contacts)
  }

  const deleteContact = (index:number) => {   // Remove contact from array of contacts
    contacts.value.splice(index, 1);
  };    
  
  const submit = async()=>{
    
    if(contacts.value[0]){
      showLoader.value = true
      const formSaved = await updateUserDetails('contacts',contacts.value)
      const userSetupCompleted = await updateUserKey('isSetupCompleted',true)
      if(formSaved && userSetupCompleted)openConfirmedDialogue.value=true;showLoader.value = false
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