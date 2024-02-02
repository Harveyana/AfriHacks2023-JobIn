import { useFireBase } from "./useFireBase"
 const {getUser} = useFireBase()
 import type { user } from '../interfaces';

 import { computed, ref } from 'vue'
 import { createGlobalState } from '@vueuse/core'

 
 export const useGlobalState = createGlobalState(
   () => {
     // state
     const user = ref<any>()

     const showConfirmDialogue = ref(false)  
     // getters
    //  const isSetupCompleted = computed(() => {if (user.value.isSetupCompleted)return true;})
 
     // actions
    //  function increment() {
    //    count.value++
    //  }
 
     return {user,showConfirmDialogue}
   }
 )