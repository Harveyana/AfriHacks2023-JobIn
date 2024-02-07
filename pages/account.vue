<template>
  <div class="w-full overflow-scroll">
    
    <Toolbar />

    <!-- Container -->
        <section class="relative overflow-y-scroll bg-transparent w-screen sm:w-full h-screen grid grid-cols-12 px-2">
            
          <TabsRoot v-model:modelValue="tab" class="absolute z-10 sticky top-0 hidden sm:col-span-12 sm:grid col-span-10 h-fit" default-value="tab1">
            <TabsList class="h-full pr-[10%] relative shrink-0 flex" aria-label="Manage your account">
                    
              <TabsTrigger
                class="bg-white dark:bg-black h-[45px] flex-1 flex items-center justify-center text-xs lg:text-sm leading-none text-black dark:text-[#555a5c] select-none  rounded-tl-md  hover:text-grass11 dark:data-[state=active]:bg-[#12171d] data-[state=active]:bg-[#f6f6f6] dark:data-[state=active]:text-white data-[state=active]:text-black data-[state=active]:border-b-2 border-black dark:border-gray-200 outline-none cursor-default transition ease-in-out duration-300"
                value="tab1"
              >
                My Profile
              </TabsTrigger>
              <TabsTrigger
                class="bg-white dark:bg-black h-[45px] flex-1 flex items-center justify-center text-xs lg:text-sm leading-none text-black dark:text-[#555a5c] select-none  rounded-tl-md  hover:text-grass11 dark:data-[state=active]:bg-[#12171d] data-[state=active]:bg-[#f6f6f6] dark:data-[state=active]:text-white data-[state=active]:text-black data-[state=active]:border-b-2 border-black dark:border-gray-200 outline-none cursor-default transition ease-in-out duration-300" 
                value="tab2"
              >
                Account Settings
              </TabsTrigger>
              <TabsTrigger
                class="bg-white dark:bg-black h-[45px] flex-1 flex items-center justify-center text-xs lg:text-sm leading-none text-black dark:text-[#555a5c] select-none  rounded-tl-md  hover:text-grass11 dark:data-[state=active]:bg-[#12171d] data-[state=active]:bg-[#f6f6f6] dark:data-[state=active]:text-white data-[state=active]:text-black data-[state=active]:border-b-2 border-black dark:border-gray-200 outline-none cursor-default transition ease-in-out duration-300"                      
                value="tab3"
              >
                Notifications & Appearance
              </TabsTrigger>
              <TabsTrigger
                class="bg-white dark:bg-black h-[45px] flex-1 flex items-center justify-center text-xs lg:text-sm leading-none text-black dark:text-[#555a5c] select-none  rounded-tl-md  hover:text-grass11 dark:data-[state=active]:bg-[#12171d] data-[state=active]:bg-[#f6f6f6] dark:data-[state=active]:text-white data-[state=active]:text-black data-[state=active]:border-b-2 border-black dark:border-gray-200 outline-none cursor-default transition ease-in-out duration-300"                      
                value="tab4"
              >
                Subscription
              </TabsTrigger>
            </TabsList>
                  
          </TabsRoot>

            <!-- TAB 1 -->
          <MyProfileTab v-if="tab =='tab1'" value="tab1" @nextTab="tab='tab2'" />

            <!-- TAB 2 -->
          <AccountSettingTab v-if="tab=='tab2'" value="tab2" @previousTab="tab='tab1'" @nextTab="tab='tab3'" />

            <!-- TAB 3 -->
          <NotificationsTab v-if="tab=='tab3'" value="tab3" @previousTab="tab='tab2'" />

          <!-- TAB 4 -->
          <SubscriptionsTab v-if="tab=='tab4'" value="tab4" @previousTab="tab='tab3'" />
    
        </section>

  </div>

</template>
<script setup lang="ts">
 definePageMeta({
  middleware: [
    'auth',
    // Add in more middleware here
  ]
 });

 const route = useRoute()
 const router = useRouter()

const tab = ref(route.query.tab ? route.query.tab : 'tab1');

const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}

watch(tab, async (newtab, oldtab) => {
  router.push({
        path: '/account',
        query: { tab: newtab },
   })
})

// onMounted(() => {
//   console.log(route.params.tab)
//   if(!route.params.tab){
//     router.push({
//         path: '/account',
//         query: { tab: 'tab1' },
//    })
//   }
  
// })

</script>

<style scoped>
  * {
    font-family: 'cabinetGrotesk', sans-serif;
  }

  .extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
  }

  .blackCabinet{
    font-family: 'cabinetGroteskBlack', sans-serif;
  }
  </style>