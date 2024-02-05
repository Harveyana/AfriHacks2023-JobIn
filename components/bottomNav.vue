
<template>
    <div class="relative bg-white z-20 dark:bg-[#12171d] h-fit col-span-12 w-full flex items-center justify-start sm:hidden px-2 py-2">

            <!-- Tabs -->

        <div class="w-full flex flex-rol justify-between items-center">

            <NuxtLink href="/" class="cabinet w-fit sm:w-full text-xs text-[#71787b] group bg-white flex flex-row items-center justify-start rounded-xl py-1 px-2.5 dark:bg-transparent dark:text-[#71787b] hover:bg-[#f3f3f3] dark:hover:bg-[#1e2328] dark:hover:text-white hover:text-black">
                    <svg class="w-4 mx-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :class="{ 'stroke-white stroke-2 fill-black ': $route.path == '/' }" class="stroke-[#71787b] stroke-2 group-hover:stroke-black dark:group-hover:stroke-white" d="M7.6123 17.3111V14.763C7.6123 14.1125 8.14346 13.5852 8.79868 13.5852H11.1938C11.5085 13.5852 11.8102 13.7093 12.0327 13.9302C12.2552 14.1511 12.3802 14.4506 12.3802 14.763V17.3111C12.3782 17.5815 12.485 17.8416 12.677 18.0335C12.8689 18.2254 13.13 18.3333 13.4024 18.3333H15.0365C15.7997 18.3353 16.5323 18.0357 17.0726 17.5007C17.613 16.9656 17.9166 16.2391 17.9166 15.4815V8.22237C17.9166 7.61037 17.6434 7.02986 17.1705 6.63721L11.6117 2.22988C10.6447 1.45712 9.25924 1.48207 8.32114 2.28914L2.88916 6.63721C2.39393 7.01828 2.09794 7.60052 2.08331 8.22237V15.4741C2.08331 17.0532 3.3728 18.3333 4.96346 18.3333H6.56022C7.126 18.3333 7.58581 17.8802 7.58991 17.3185L7.6123 17.3111Z"/>
                    </svg>
                    <span v-if="$route.name === 'index'">
                        Home
                    </span>
            </NuxtLink>

            <NuxtLink href="/documents" class="cabinet w-fit sm:w-full text-xs text-[#71787b] group bg-white flex flex-row items-center justify-start rounded-xl py-1 px-2.5 dark:bg-transparent dark:text-[#71787b] hover:bg-[#f3f3f3] dark:hover:bg-[#1e2328] dark:hover:text-white hover:text-black">
                    <svg class="w-4 mx-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :class="{ 'stroke-white stroke-2 fill-black': $route.path == '/documents' }" class="stroke-[#71787b] stroke-2 group-hover:stroke-black dark:group-hover:stroke-white" d="M7.50002 10H12.5M7.50002 13.3333H12.5M14.1667 17.5H5.83335C4.91288 17.5 4.16669 16.7538 4.16669 15.8333V4.16667C4.16669 3.24619 4.91288 2.5 5.83335 2.5H10.4882C10.7092 2.5 10.9212 2.5878 11.0774 2.74408L15.5893 7.25592C15.7456 7.4122 15.8334 7.62416 15.8334 7.84518V15.8333C15.8334 16.7538 15.0872 17.5 14.1667 17.5Z" />
                    </svg>
                    <span v-if="$route.name === 'documents'">
                        Documents
                    </span>
            </NuxtLink>

            <NuxtLink href="/resources" class="cabinet w-fit sm:w-full text-xs text-[#71787b] group bg-white flex flex-row items-center justify-start rounded-xl py-1 px-2.5 dark:bg-transparent dark:text-[#71787b] hover:bg-[#f3f3f3] dark:hover:bg-[#1e2328] dark:hover:text-white hover:text-black">
                    <svg class="w-4 mx-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_2001_105366" fill="white">
                          <path  fill-rule="evenodd" clip-rule="evenodd" d="M20 12.8967H15.7695C14.2162 12.8956 12.9572 11.5331 12.9562 9.85092C12.9562 8.16869 14.2162 6.80621 15.7695 6.80518H20"/>
                        </mask>
                        <path :class="{ 'stroke-white stroke-2 fill-black': $route.path == '/resources' }" class="stroke-[#71787b] stroke-2 group-hover:stroke-black dark:group-hover:stroke-white" d="M20 14.3967C20.8284 14.3967 21.5 13.7251 21.5 12.8967C21.5 12.0682 20.8284 11.3967 20 11.3967V14.3967ZM15.7695 12.8967L15.7685 14.3967H15.7695V12.8967ZM12.9562 9.85092H11.4562L11.4562 9.85177L12.9562 9.85092ZM15.7695 6.80518V5.30518L15.7685 5.30518L15.7695 6.80518ZM20 8.30518C20.8284 8.30518 21.5 7.6336 21.5 6.80518C21.5 5.97675 20.8284 5.30518 20 5.30518V8.30518ZM20 11.3967H15.7695V14.3967H20V11.3967ZM15.7705 11.3967C15.1544 11.3963 14.4568 10.8185 14.4562 9.85007L11.4562 9.85177C11.4576 12.2478 13.278 14.395 15.7685 14.3967L15.7705 11.3967ZM14.4562 9.85092C14.4562 8.88393 15.1537 8.30559 15.7705 8.30518L15.7685 5.30518C13.2787 5.30683 11.4562 7.45346 11.4562 9.85092H14.4562ZM15.7695 8.30518H20V5.30518H15.7695V8.30518Z" fill="#71787B" mask="url(#path-1-inside-1_2001_105366)"/>
                        <path d="M16.2485 9.78149H15.9225" stroke="#71787B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path :class="{ 'stroke-white stroke-2 fill-black': $route.path == '/resources' }" class="stroke-[#71787b] stroke-2 group-hover:stroke-black dark:group-hover:stroke-white" d="M5.48376 0.75H14.5161C17.0752 0.75 19.2498 3.01576 19.2498 5.93884V14.0612C19.2498 16.9842 17.0752 19.25 14.5161 19.25H5.48376C2.92461 19.25 0.75 16.9842 0.75 14.0612V5.93884C0.75 3.01576 2.92461 0.75 5.48376 0.75Z" stroke="#71787B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path :class="{ 'stroke-white stroke-2 fill-black': $route.path == '/resources' }" class="stroke-[#71787b] stroke-2 group-hover:stroke-black dark:group-hover:stroke-white" d="M4.74005 5.13574H10.382" stroke="#71787B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span v-if="$route.name === 'resources'">
                        Resources
                    </span>
            </NuxtLink>

            <NuxtLink href="/more" class="cabinet w-fit sm:w-full text-xs text-[#71787b] group bg-white flex flex-row items-center justify-start rounded-xl py-1 px-2.5 dark:bg-transparent dark:text-[#71787b] hover:bg-[#f3f3f3] dark:hover:bg-[#1e2328] dark:hover:text-white hover:text-black">
                
                <svg class="w-5 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path :class="{ ' stroke-black fill-black dark:fill-white': $route.name == 'more' }"  class="stroke-[#71787b] stroke-2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
                <span v-if="$route.name === 'more'">
                    More
                </span>
            </NuxtLink>

            

        </div>

        
    </div>
    
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
const route = useRoute();

const IsActive = (targetRoute:string) => {
  return computed(() => route.path === targetRoute);
};

// Pass the necessary arguments to create the computed ref
// const visible = ref(false);
// const appConfig = useAppConfig()

// const baseColor = appConfig.theme.colors.primary
// const vyreYellow = appConfig.theme.colors.vyreYellow
// const vyreGreen = appConfig.theme.colors.vyreGreen
// const vyreLemon = appConfig.theme.colors.vyreLemon




</script>
<style scoped>
.cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }
.router-link-exact-active{
    background:#f3f3f3;
    color:black
}
</style>