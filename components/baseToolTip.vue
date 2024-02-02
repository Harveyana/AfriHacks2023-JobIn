<template>

    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger
          class="text-white shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full outline-none focus:shadow-black"
        >
          <!-- <Icon icon="radix-icons:plus" /> -->
          <slot></slot>

        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            class="z-10  data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade mr-20 text-black select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            :side-offset="2"
          >
            {{$props.text}}
            <TooltipArrow class="fill-white" size="8" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </template>
  <script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()
  </script>

