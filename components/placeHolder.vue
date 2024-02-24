<template>
    <div class="w-full bg-[#12171d] rounded-3xl flex flex-col items-center justify-center space-y-4 lg:space-y-8 py-12">
          <div class="w-[40%]">
            <img
              :src=steps[props.step].img
              class="w-full"
              alt=""
            />
          </div>

          <h1
            class="text-lg text-white cabinet flex flex-col items-center justify-center"
            >
            No available history
            <p  class="text-xs sm:text-sm text-center text-gray-500 cabinet paragraph mx-14 mt-4">
              Your document will be visible after your generate your first resume and cover letter
            </p>
          </h1>

        
          <button @click="$emit('alternate')" class="extraboldCabinet border text-xs lg:text-lg w-fit hover:bg-black bg-[#1e2328] flex flex-row items-center justify-center rounded-3xl p-3">
            <span class="text-white">{{steps[props.step].title}}</span>
          </button>
        </div>
  </template>

  <script setup lang="ts">
  import experienceImage from '~/assets/img/deliverybag.svg';
  import educationImage from '~/assets/img/education.svg';
  import projectsImage from '~/assets/img/projects.svg';
  import certificateImage from '~/assets/img/certificate.svg';
  import skillsImage from '~/assets/img/skills.svg';
  import contactsImage from '~/assets/img/contacts.svg';

  const props = defineProps<{
      step:number;
  }>()

  const steps:{img:string,title:string}[] = [
        {
          img: experienceImage,
          title: 'Add work experience'
        },
        {
          img: educationImage,
          title: 'Add education experience'
        },
        {
          img: projectsImage,
          title: 'Add Project'
        },
        {
          img: certificateImage,
          title: 'Add certification'
        },
        {
          img: skillsImage,
          title: 'Add skill'
        },
        {
          img: contactsImage,
          title: 'Add contact info'
        }
      ]
  
  </script>
  <style scoped>
  .cabinet {
    font-family: 'cabinetGrotesk', sans-serif;
  }

  .extraboldCabinet{
    font-family: 'cabinetGroteskBold', sans-serif;
  }
  </style>