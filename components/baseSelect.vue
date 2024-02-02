<template>
    <SelectRoot v-model="currentValue" @update:modelValue="$emit('optionChanged',currentValue)">
                <SelectTrigger
                 :class="{ 'bg-transparent': currentValue == '' }"
                  class="cabinet inline-flex w-full border border-[#23282d] items-center justify-between rounded-3xl py-6 px-4 text-[13px] leading-none h-[35px] gap-[5px] bg-white dark:bg-[#12171d] text-black dark:text-white shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
                  aria-label="select type"
                >
                  <SelectValue class="text-xs lg:text-sm" :placeholder="$props.placeholder" />
                  <svg class='w-6 md:w-7 fill-white stroke-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/></svg>

                </SelectTrigger>

                <SelectPortal>
                  <SelectContent
                    class="cabinet min-w-[160px] bg-[#0b1015] rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
                    :side-offset="5"
                  >
                    <SelectViewport class="p-[5px]">
                      
                      <SelectGroup>
                        <SelectItem
                          v-for="(option, index) in props.options"
                          :key="index"
                          class=" cabinet text-xs lg:text-sm leading-none text-white rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-black"
                          :value="option"
                        >
                          <SelectItemText class="">
                            {{ option }}
                          </SelectItemText>
                        </SelectItem>
                      </SelectGroup>
                      
                    </SelectViewport>
                  </SelectContent>
                </SelectPortal>
              </SelectRoot>
  </template>

  <script setup lang="ts">

  const props = defineProps<{
      options:string[];
      placeholder:string
  }>()

  const currentValue = ref('')
  
  </script>