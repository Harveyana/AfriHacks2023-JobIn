<template>
  <!-- <div class="w-full text-[12px] p-4 h-fit text-black overflow-scroll" v-html="renderedMarkdown"></div> -->
  <div class="container mx-auto p-4">

    <div class="mb-4 border-b pb-4">
      <h2 class="text-lg font-bold">Contact Information</h2>
      <p>Email: {{ cv.contacts.email }}</p>
      <p class="text-black" v-if="cv.contacts.github">GitHub: <a class="text-black" :href="cv.contacts.github">{{ cv.contacts.github }}</a></p>
      <p>Location: {{ cv.contacts.location }}</p>
    </div>

    <!-- Display summary -->
    <div class="mb-4 border-b pb-4">
      <h2 class="text-lg font-bold">Summary</h2>
      <p>{{ cv.summary }}</p>
    </div>

    <!-- Display education -->
    <div class="mb-4 border-b pb-4">
      <h2 class="text-lg font-bold">Education</h2>

      <div v-for="(edu, index) in cv.education" :key="index">
        <p>{{ edu.yearStarted }} - {{ edu.yearEnded }}</p>
        <p>{{ edu.certification }}, {{ edu.institution }}</p>
        <p>{{ edu.location }}</p>
        <p v-if="edu.url"><a :href="edu.url">More info</a></p>
        <p v-if="edu.description">{{ edu.description }}</p>
      </div>
    </div>

    <!-- Display experiences -->
    <div class="mb-4 border-b pb-4">
      <h2 class="text-lg font-bold">Experiences</h2>

      <div v-for="(exp, index) in cv.experiences" :key="index">
        <p>{{ exp.yearStarted }} - {{ exp.yearEnded }}</p>
        <p>{{ exp.title }}, {{ exp.company }}</p>
        <p>{{ exp.location }}</p>
        <p v-if="exp.url"><a :href="exp.url">More info</a></p>
        <ul>
          <li v-for="(desc, dIndex) in exp.descriptions" :key="dIndex">{{ desc }}</li>
        </ul>
      </div>
    </div>

    <!-- Display projects -->
    <div class="mb-4 border-b pb-4">
      <h2 class="text-lg font-bold">Projects</h2>
      <div v-for="(project, index) in cv.projects" :key="index">
        <p>{{ project.title }}, {{ project.year }}</p>
        <p>{{ project.client }}</p>
        <p v-if="project.url"><a :href="project.url">More info</a></p>
        <p>{{ project.description }}</p>
      </div>
    </div>

    <!-- Display certifications -->
    <div class="mb-4 border-b pb-4">
      <h2 class="text-lg font-bold">Certifications</h2>
      <div v-for="(cert, index) in cv.certifications" :key="index">
        <p>{{ cert.name }}, {{ cert.yearIssued }} - {{ cert.yearExpires }}</p>
        <p>{{ cert.organisation }}</p>
        <p v-if="cert.url"><a :href="cert.url">More info</a></p>
        <p>{{ cert.description }}</p>
      </div>
    </div>

    <!-- Display skills -->
    <div>
      <h2 class="text-lg font-bold">Skills</h2>
      <ul>
        <li v-for="(skill, index) in cv.skills" :key="index">{{ skill }}</li>
      </ul>
    </div>

    <!-- JobRoutes Attribution -->
    <div class="w-full flex items-center mx-auto mt-20">
      <p class="text-sm text-black">Brought to you by JobRoutes</p>
      <img src="~/assets/img/logo/JobRoutesDark.svg" alt="JobRoutes Logo" class="h-6 w-6 ml-2">
    </div>


  </div>

</template>
  
  <script setup lang="ts"> 
  // import markdownIt from 'markdown-it';
  
  const props = defineProps<{
    markdownString: string
  }>()

  const state = useGlobalState()

  const cv = state.parsedData.value


  const nuxtApp = useNuxtApp()
  
  const md = nuxtApp.$md
  
 const stringer = ref('## Hello World!')

  const model = `${state.chatResponse.value}`

  const renderedMarkdown = computed(() => md.render(state.chatResponse.value))
  
  
  // const record = ref<string|any>('')
  

 

  </script>