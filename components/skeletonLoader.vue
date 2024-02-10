<template>
    <div class="flex bg-[#a6abac] dark:bg-[#0b1015] ">
    <div class="shadow rounded-md px-2 sm:p-4 w-screen h-screen mx-auto">
      <div class="animate-pulse h-full flex sm:space-x-4 grid grid-cols-12">
        <!-- sidebar -->
        <div class="hidden sm:flex rounded-2xl bg-slate-700 h-full col-span-3 flex-col items-center justify-start gap-y-9 py-12 px-4">
          <div class="h-2 animate-pulse w-full rounded flex justify-center items-center gap-x-3">
            <div class="h-14 animate-pulse w-[20%] bg-white rounded-full"></div>
            <div class="h-6 animate-pulse w-[80%] bg-white rounded"></div>
          </div>

          <div class="h-6 animate-pulse w-full bg-white rounded"></div>
          <div class="h-6 animate-pulse w-full bg-gray-500 rounded"></div>
          <div class="h-6 mt-auto animate-pulse w-full bg-white rounded"></div>
          <div class="h-2 animate-pulse w-full rounded flex justify-center items-center gap-x-3">
            <div class="h-14 animate-pulse w-[20%] bg-white rounded-2xl"></div>
            <div class="h-6 animate-pulse w-[80%] bg-white rounded"></div>
          </div>
        </div>

        <div class=" h-full space-y-6 py-1 col-span-12 sm:col-span-9">
          
          <div class="space-y-3 w-full">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-6 bg-slate-700 rounded sm:col-span-2"></div>
              <div class="h-fit flex gap-x-3 px-2 items-center justify-center bg-slate-700 rounded col-span-3 sm:col-span-1">
                <div class="h-12 ml-auto mr- animate-pulse w-[20%] sm:w-[40%] bg-white rounded-full"></div>
                <div class="h-6 animate-pulse w-[40%]  bg-white rounded"></div>
              </div>
            </div>

            <div class="flex-1 flex py-6 h-40 bg-slate-700 rounded px-2">
              <div class="h-6 animate-pulse w-[80%] bg-white rounded"></div>
            </div>

            <div class="flex-1 flex py-6 h-60 bg-slate-700 rounded px-2">
              <div class="h-10 py-2 px-2 mt-auto gap-x-3 animate-pulse w-full flex bg-white rounded">
                <div class="h-6 animate-pulse w-[20%] bg-slate-700 rounded"></div>
                <div class="h-6 animate-pulse w-[20%] bg-slate-700 rounded"></div>
                <div class="h-6 animate-pulse w-[20%] bg-slate-700 rounded"></div>
                <div class="h-6 animate-pulse w-[20%] bg-slate-700 rounded"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script setup lang="ts">
  
  </script>

