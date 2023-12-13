<template>
    <div class="h-screen bg-[#a6abac] dark:bg-[#0b1015] max-h-[50rem] border-2 border-black max-w-screen-xl flex flex-wrap flex-row mx-auto overflow-hidden">
      <MobileMenu :show-menu="showMobileMenu" @closeMenu="showMobileMenu = false"/>
      <SideBar />
      <section class="h-full w-full overflow-y-scroll scroll-smooth sm:overflow-hidden w-full sm:w-[75%] lg:w-[82%] grid grid-cols-12 gap-x-2">
        <div class="col-span-12 w-full h-full overflow-y-scroll scroll-smooth ">
          <Toolbar @openMenu="showMobileMenu = true" :new="true"/>
          <slot/>
        </div>
      </section>
    </div>
</template>

<script setup lang="ts">
const showMobileMenu = ref(false)
</script>