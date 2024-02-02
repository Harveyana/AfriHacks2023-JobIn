<template>
  <div class="w-full h-full sm:h-[90%] overflow-hidden bg-[#f6f6f6] dark:bg-[#0b1015]">

    <!-- Container -->
    <section class="overflow-hidden w-full h-full grid grid-cols-12 gap-y-2 gap-x-4 pt-2 px-2 sm:px-4">

        <div class="h-[92%] col-span-12 lg:col-span-7">
          <div class="w-full bg-white border border-gray-100 dark:border-[#23282d] dark:bg-[#12171d] rounded-2xl space-y-4 px-5 py-4">
            <span class="text-sm w-full text-[#555a5c] flex flex-row items-start justify-start">
             Available Balance
            </span>

            <div class="flex flex-row items-center justify-between">
              <h1 class="text-4xl text-white font-bold" data-aos="fade-right" data-aos-once="true">
                $140,000
              </h1>

              <svg class='cursor-pointer w-6 sm:w-3 md:w-10 stroke-black dark:stroke-gray-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"/></svg>
            </div>

            <span class="text-sm w-full text-[#555a5c] flex flex-row items-start justify-start">
             Payout Balance: <span class="text-white mx-2">$139,000.99</span>
            </span>

          </div>
        </div>

        <div class="h-full overflow-x-hidden overflow-y-scroll space-y-2 col-span-12 lg:col-span-5">



          
        </div>

        
    </section>

</div>

</template>
<script setup lang="ts">

const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}
     
</script>

<style scoped>

</style>