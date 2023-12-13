<template>
    <div class="w-full h-full sm:h-[90%] overflow-hidden bg-[#f6f6f6] dark:bg-[#0b1015]">
 
     <!-- Container -->
        <section class="overflow-hidden w-full h-full grid grid-cols-12 gap-y-2 gap-x-4 pt-2 px-2 sm:px-4">
 
            <div class="h-full p-4 rounded-2xl dark:bg-[#12171d] overflow-y-scroll col-span-12">

                <DataTable
                :pt="{
                    table: { class:'bg-gray-200 dark:bg-[#0b1015] dark:text-white text-sm text-black w-full' },
                    root: { class:'bg-white dark:bg-[#12171d]'},
                    paginator: {
                        root:{class:'dark:bg-[#12171d] text-white w-30 px-2 mx-2'}
                    }
                }"
                 @rowSelect="$router.push(`/documents/${selectedDialogue.role}`)" paginator :rows="5" :rowsPerPageOptions="[5, 10]" v-model:selection="selectedDialogue" selectionMode="single" dataKey="role" :value="dialogues">
                    <Column 
                    :pt="{
                        bodyCell: { class: 'bg-white dark:bg-[#12171d] hover:bg-gray-300 dark:hover:bg-black' }
                    }"
                     field="role" header="Role"></Column>

                    <Column
                    :pt="{
                        bodyCell: { class: 'bg-white dark:bg-[#12171d] hover:bg-gray-300 dark:hover:bg-black' }
                    }"
                     field="lastEdited" header="Last Edited"></Column>

                    <Column 
                    :pt="{
                        bodyCell: { class: 'bg-white dark:bg-[#12171d] hover:bg-gray-300 dark:hover:bg-black' }
                    }"
                    field="dateCreated" header="Date Created"></Column>

                </DataTable>


            </div>
        
     
        </section>
 
    </div>
 
 </template>

 <script setup lang="ts">

  const selectedDialogue = ref();
  const route = useRoute()
 

  const enterDialogue = ()=>{
    console.log(selectedDialogue.value.role)
    
  }

  const dialogues:{role:string;lastEdited:string;dateCreated:string}[]=[
    {
        role:'Product Designer',
        lastEdited:'Today',
        dateCreated:'2023-11-30'
    },
    {
        role:' Senior Product Designer',
        lastEdited:'Today',
        dateCreated:'2023-11-30'
    },
    {
        role:'Software Engineer',
        lastEdited:'Today',
        dateCreated:'2023-11-30'
    },
    {
        role:'Data analyst',
        lastEdited:'Yesterday',
        dateCreated:'2023-11-30'
    },
    {
        role:'laravel developer',
        lastEdited:'Last Month',
        dateCreated:'2023-11-30'
    },
    {
        role:'Brand Designer',
        lastEdited:'Yesterday',
        dateCreated:'2023-11-30'
    }
  ]
 

 </script>
 
 <style scoped>
 
 </style>