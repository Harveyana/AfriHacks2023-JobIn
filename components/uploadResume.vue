<template>
    <div v-if="!uploaded" ref="dropZoneRef" :class="{ 'border border-white': isOverDropZone }" class="w-full sm:w-[40%] lg:w-[33%] mx-5 border border-[#23282d] hover:border-white rounded-3xl flex flex-col items-center justify-center bg-transparent py-5 px-6 space-y-4">
            <img src="~/assets/img/upload.svg" class="w-12 bg-[#0b1015] cursor-pointer p-1 rounded-[50px] mx-2 lg:w-20" />

            <h1 class="blackCabinet text-sm lg:text-lg text-center text-white font-bold">
              <span @click="open" class="cursor-pointer hover:text-gray-500">Click to upload</span>  <span class="text-[#555a5c]"> or drag and drop</span>
            </h1> 

            <span class="text-sm lg:text-lg text-[#555a5c] text-center">
              PDF,PNG or JPG(max.800x400px)
            </span>

    </div>
    <!-- sm:w-[40%] lg:w-[33%] -->
    <div v-else class="w-full mx-10 py-3 flex flex-row rounded-3xl justify-start items-center border border-[#23282d]">
      <img src="~/assets/img/doc.svg" class="w-12 bg-[#0b1015] cursor-pointer p-1 rounded-[50px] mx-2 lg:w-14" />
      <div class="flex flex-col justify-center items-start">
        <h1 class="blackCabinet text-sm lg:text-lg text-center text-white font-bold">
            {{fileName}}
        </h1> 
        <span class="text-sm text-[#555a5c] text-center">
            100% uploaded
        </span>

      </div>
      <svg @click="reset" class="ml-auto mr-4 mb-auto mt-2 hover:stroke-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M5 3h2a1 1 0 0 0-2 0M4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zM5 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M3.38 9.085a1 1 0 0 0 .997.915h3.246a1 1 0 0 0 .996-.915L9.055 4h-6.11z"/></svg>
    </div>
  </template>

  <script setup lang="ts">
  
    // import {extractPdf} from '../composables/useDoc'
    
    // Basic file upload


    const { files, open, reset, onChange } = useFileDialog({
      accept: 'application/pdf', // Set to accept what type of files
      multiple: false 
    })

    const fileName = ref('')
    const uploaded = ref(false)
     

    onChange(async(files: File[]) => {
      uploaded.value = true
      console.log(files)
      fileName.value = files[0].name

        // Set loading to true before extracting text from the PDF
        // this.loading = true;
        // const arrayBuffer = await files[0].arrayBuffer()
        // try {
        //   const data = await extractPdf(arrayBuffer);
        //   console.log(data)
          
        // } catch (error) {
        //   console.error('Error processing PDF:', error);
        // }      
    })

    // Advanced file upload 

    const dropZoneRef = ref<HTMLDivElement>()

    function onDrop(files: File[]) {
      console.log(files)
      fileName.value = files[0].name
      uploaded.value = true
    }

    const { isOverDropZone } = useDropZone(dropZoneRef, {
      onDrop,
      // specify the types of data to be received.
      dataTypes: ['application/pdf']
    })


  // const props = defineProps<{
  //     url: string
  // }>()
  </script>

  <style scoped>
   .cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
  }
  .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
  }
  </style>