<template>
  <div class="w-full h-full overflow-y-scroll bg-[#f6f6f6] dark:bg-[#0b1015]">

    <!-- Container -->
    <section class="w-full h-full flex flex-row items-center justify-center ">

        <!-- sign Up -->
       <SignUp v-if="signup" @openLogin="signup = false"/>
        <!-- Login -->
        <Login v-else @openSignup="signup = true"/>
        
    </section>
    <Toast group="success" severity='success' :pt="{
                  container: {
                      style: 'background: #7fdbb4; margin: 10px; padding:5px; color: white'
                  }
            }"/>

            <Toast group="fail" severity='error' :pt="{
                  container: {
                      style: 'background: #CA3433; margin: 10px; padding:5px; color: white'
                  }
            }"/>

  </div>

</template>
<script setup lang="ts">
  //  import { useForm } from 'vee-validate';
  //  import { toTypedSchema } from '@vee-validate/yup';
  //  import * as yup from 'yup';
  //  import { useToast } from "primevue/usetoast";


  //  const toast = useToast();

  definePageMeta({
    layout: 'custom'
  })

  // const showLoader = ref(false)
  // const {objectToArray} = useConverters()



  // const { errors,handleSubmit, defineInputBinds,values,resetForm } = useForm({
  //     validationSchema: toTypedSchema(
  //       yup.object({
  //         email: yup.string().email().required(),
  //         password: yup.string().required(),
  //       })
  //     ),
  // });

  // async function onSuccess() {
  //     if(values.email && values.password){
  //       // const response = await addUser(values.fullName,values.email,values.country)

  //       if (response){
  //         showLoader.value = false
  //         toast.add({ severity: 'success', summary: 'Operation Successful', detail: 'Email added to Waitlist', life: 3000, group:'success' });
  //         resetForm()
  //       }
  //     }

  // }

  // function onInvalidSubmit() {
  //     const errorArray = objectToArray(errors.value)
  //     showLoader.value = false
  //     errorArray.forEach((error)=>{
  //       toast.add({ severity: 'error', summary: error.key, detail: error.value, life: 3000, group:'fail' });
  //     })
  //     resetForm()
  // }


  // const email = defineInputBinds('email');
  // const password = defineInputBinds('password');

  // const loginEmail = defineInputBinds('loginEmail');
  // const loginPassword = defineInputBinds('loginPassword');

  // const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);


const signup = ref(true)

// const data = ref('Job Title: Product Designer')

// const expanded = ref(8)


      
</script>

<style scoped>

</style>