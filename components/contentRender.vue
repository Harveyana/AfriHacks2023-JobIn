<template>
  <div class="w-full  p-4 h-fit text-black overflow-scroll" v-html="renderedMarkdown"></div>
</template>
  
  <script setup lang="ts"> 
  // import markdownIt from 'markdown-it';
  
  const props = defineProps<{
    markdownString: string
  }>()

  const state = useGlobalState()


  const nuxtApp = useNuxtApp()
  
  const md = nuxtApp.$md
  
 const stringer = ref('## Hello World!')

  const model = `${state.chatResponse.value}`

  const renderedMarkdown = computed(() => md.render(state.chatResponse.value))
  
  
  // const record = ref<string|any>('')
  

 

  </script>