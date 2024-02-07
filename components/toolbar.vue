<template>
    <div class="absolute sm:relative z-10 col-span-12 w-full h-[9%] bg-white dark:bg-[#0b1015] flex flex-row items-center justify-end px-3  py-2">
           <!-- hamburger icon for mobile only -->
            <!-- <svg @click="$emit('openMenu')" class='sm:hidden mr-auto cursor-pointer w-6 md:w-7 fill-black stroke-black dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke-linejoin="round"><rect width="16" height="5" x="4" y="5" rx="1"/><rect width="16" height="5" x="4" y="14" rx="1"/></g></svg> -->

            <span class="hidden cabinet capitalize sm:block font-semiBold mr-auto text-sm sm:text-lg text-black dark:text-white">
              {{ routeName }}
            </span>
            <span class="relative sm:mx-4">
              <span class="bg-red-500 rounded-2xl absolute right-0  w-3 h-3"></span>
              <svg class="w-6 md:w-7 dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z"/></svg>
            </span>
            <img v-if="user" @click="toggle" :src="user.photoUrl" class="w-10 cursor-pointer p-1 rounded-[50px] bg-green-300 mx-3 md:my-1 md:w-8" />
            <span v-if="user" @click="toggle" class="cabinet cursor-pointer truncate text-xs text-black dark:text-white">
              {{user.displayName}}
            </span>
            <svg class=' cursor-pointer w-6 md:w-7 dark:fill-white dark:stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>
            <Menu ref="menu" class="border-none" :model="items" :popup="true" :unstyled="true" :pt="{
                  root: {
                      style: 'background:white;width:7rem;'
                  },
                  action: ({ props, state, context }) => ({
                    class: state.selectedOptionIndex ? 'bg-primary-400' : undefined
                  }),
                  menuitem:{
                    class:'cabinet hover:bg-gray-200 px-2 py-1 cursor-pointer'
                  }
              }" />
          </div>
  </template>

  <script setup lang="ts">
  import { getAuth, signOut } from "firebase/auth";
  // import type { user } from '../interfaces';


  const state = useGlobalState()

  const menu = ref();
  const router = useRouter()
  const route = useRoute()
  // const props = defineProps<{
  //   user:user
  // }>()
  const user = state.user

  const toggle = (event: any) => {
      menu.value.toggle(event);
  };

  const routeName = computed(() => {
    return route.name == 'index' ? 'Home':route.name == 'documents' ? 'Docs':route.name == 'documents-id'? 'Docs':route.name =='account'? 'Account':route.name =='resources'? 'Resources':''
  })

  const items = ref([
        {
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-refresh',
                    command: () => {
                      console.log('heelo')
                    }
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-upload',
                    command: () => {
                      const auth = getAuth();
                      signOut(auth).then(() => {
                        router.push('/auth')
                      }).catch((error) => {
                        console.log(error)
                      });
                    }
                }
            ]
        }
  ]);
  
  </script>
  <style scoped>
  .cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

  </style>