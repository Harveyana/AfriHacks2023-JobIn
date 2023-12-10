<template>
    <div class="h-screen dark:bg-[#0b1015] max-h-[50rem] border-2 border-black max-w-screen-xl flex flex-wrap flex-row mx-auto overflow-hidden">
      <SideBar />
      <section class="h-full w-full overflow-y-scroll scroll-smooth w-full sm:w-[82%] grid grid-cols-12 pt-4 gap-x-2">
        <div class="col-span-12 w-full overflow-y-scroll scroll-smooth">
          <slot/>
        </div>
      </section>
    </div>
  </template>