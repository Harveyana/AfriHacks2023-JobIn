 <template>

<Dialog
      v-model:visible="props.openDownloadDialog"
      :closable="false"
      :closeOnEscape="true"
      :dismissableMask="true"
      :showHeader="false"
      modal
      :pt="{
          mask: {
              style: 'backdrop-filter: blur(10px)'
          },
          root:{
            class:'mx-2 sm:m-24 max-h-[80vh] sm:max-w-[50vw] overflow-hidden cabinet rounded-3xl shadow-[0_2px_3px] shadow-black transition ease-in-out duration-300 bg-white'
          },
          content:{
              class:'w-full p-4 sm:px-12 h-fit flex flex-col gap-y-4 rounded-3xl'
          },
      }"
      >
          <!-- <div  class="h-full"> -->
              <!-- <div  class="row-span-2 w-full border border-black overflow-hidden"> -->
              <!-- </div> -->

              <TabsRoot v-model:modelValue="tab" class="absolute z-10 sticky top-0 w-full h-fit" default-value="tab1">
                <TabsList class="h-full pr-[10%] relative shrink-0 flex" aria-label="Manage your account">
                        
                  <TabsTrigger
                    class="bg-white dark:bg-black h-[45px] flex-1 flex items-center justify-center text-xs lg:text-sm leading-none text-black dark:text-[#555a5c] select-none  rounded-tl-md  hover:text-grass11 dark:data-[state=active]:bg-[#12171d] data-[state=active]:bg-[#f6f6f6] dark:data-[state=active]:text-white data-[state=active]:text-black data-[state=active]:border-b-2 border-black dark:border-gray-200 outline-none cursor-default transition ease-in-out duration-300"
                    value="tab1"
                  >
                    Basic
                  </TabsTrigger>
                  <TabsTrigger
                    class="bg-white dark:bg-black h-[45px] flex-1 flex items-center justify-center text-xs lg:text-sm leading-none text-black dark:text-[#555a5c] select-none  rounded-tl-md  hover:text-grass11 dark:data-[state=active]:bg-[#12171d] data-[state=active]:bg-[#f6f6f6] dark:data-[state=active]:text-white data-[state=active]:text-black data-[state=active]:border-b-2 border-black dark:border-gray-200 outline-none cursor-default transition ease-in-out duration-300" 
                    value="tab2"
                  >
                    Customise
                  </TabsTrigger>
                </TabsList>
                      
              </TabsRoot>

              <div
              v-if="tab == 'tab1'"
                class="h-[55vh] border border-black rounded overflow-scroll bg-white"
              >

                  <div ref="pdfSection" class="w-fit h-full ">
                    <div id="element-to-convert" class="w-fit">
                      <ContentRender :markdown-string="state.chatResponse.value" />
                    </div>
                  </div>
                  
              </div>

              <TemplateDoc v-if="tab == 'tab2'" />
              <!-- Actions -->
              <div v-if="tab == 'tab1'" class=" w-full flex gap-x-12">

                      <div class="w-[30%]">
                        <BaseButton  @click="" class="bg-black">
                          <span class="text-[16px] text-white hover:text-gray-200 text-center">Cancel</span>
                        </BaseButton>
                      </div>
                      

                      <BaseButton @click="exportToPDF" class="bg-black">
                        <span class="text-[16px] text-white hover:text-gray-200 text-center">Download</span>
                      </BaseButton>
              </div>
          <!-- </div> -->
              

    </Dialog>

    
 </template>

  <script setup lang="ts">

  import html2pdf from "html2pdf.js";

  // import { exportToPDF } from '#imports'

  // const pdfSection = ref<HTMLElement | null>(null)

  const exportToPDF = ()=> {
      html2pdf(document.getElementById("element-to-convert"), {
				margin: 1,
  			filename: "i-was-html.pdf",
			});
    }

  const {parse} = useRequests()

  const state = useGlobalState()

  // const parsedData = ref()

  const tab = ref('tab1')

  const user = state.user

  // const parseDoc = async()=>{
  //   // console.log(state.chatResponse.value)
  //   const response = await parse(state.chatResponse.value);
  //   console.log(response)
  //   parsedData.value = response
  // }


  const props = defineProps<{
    openDownloadDialog: boolean;
  }>()

  // onMounted(async()=>{
  //   if(state.chatResponse.value)parseDoc()
    
  // })
  
  </script>