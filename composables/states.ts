import { useFireBase } from "./useFireBase"
 const {getUser} = useFireBase()
 import type { user } from '../interfaces';

 import { computed, ref } from 'vue'
 import { createGlobalState } from '@vueuse/core'

 
 export const useGlobalState = createGlobalState(
   () => {
     // state
     const user = ref<any>()

     const showConfirmDialogue = ref(false)

     const showUpgradeDialogue = ref(false)


     const showLoader = ref(false)
     const ProgressNumber = ref(60)
     const Progress = ref('fetching documents')

     const openSetupDialog = ref(false)

     const docs = ref<any[]>(user.value?.docHistory)

     const chatResponse = ref('')

     const chatRequest = ref('')

    //  const markdown = ref("# Harvey Anafuwe's Resume\n\n---\n\n## Contact Information\n\n**Email:** harveyana3@gmail.com  \n**GitHub:** [harveyana3](https://github.com/harveyana3)  \n**Location:** Lagos, Nigeria\n\n---\n\n## Personal Statement\n\nA seasoned Engineering professional with over 3 years of experience in leading software design and architecture, seeking a Software Developer position with Acme Technologies. Skilled in translating project requirements into executable technical specifications and excelling in developing scalable and reliable software solutions. Holds profound expertise in Java, Spring Boot, and Angular. Eager to leverage my problem-solving skills and attention to detail to contribute to the success of Acme Technologies and help drive growth by delivering superior cloud-based solutions to enterprise clients.\n\n---\n\n## Education\n\n**Petroleum Training Institute, Warri**  \n- Location: Delta State, Nigeria\n- Study Field: Engineering  \n(NOTE: Specific graduation date and degree details were not provided.)\n\n---\n\n## Professional Experience\n\n**Team Lead**  \nMicrographia, Lagos, Nigeria  \n2001 - 2004  \n- Spearheaded software design and architecture initiatives, ensuring alignment with client requirements and project goals.  \n- Played a key role in enhancing team collaboration and productivity by fostering a creative and inclusive work environment.  \n- Led the development and implementation of scalable and reliable software solutions, contributing significantly to the company's growth and success.  \n- [Micrographia](https://micrographia.design)\n\n---\n\n## Skills\n\n- **Programming Languages & Frameworks:** Proficient in Java, Spring Boot, and Angular.\n- **Software Development:** Extensive experience in designing, developing, and maintaining scalable software solutions.\n- **Problem-Solving:** Demonstrated ability to tackle complex software development challenges with innovative solutions.\n- **Team Collaboration:** Proven capability to work effectively with cross-functional teams, contributing to cohesive project execution.\n- **Code Documentation & Review:** Skilled in writing clean, efficient, and well-documented code; adept at performing thorough code reviews.\n- **Agile Methodologies:** Experience with agile development practices, enhancing project flexibility and delivering timely results.\n- **Adaptability:** Flexible in rapidly changing environments, prioritizing tasks to meet evolving project requirements.\n\n---\n\n## Achievements\n\n- Led a team that successfully completed several software projects on time and within budget, thereby increasing client satisfaction and retention.\n\n---\n\n## Certifications\n\n- (NOTE: Specific certifications, including potential AWS or Azure certifications, were not provided.)\n\n---\n\n## References\n\nAvailable upon request.\n\n---")

     // getters
    //  const isSetupCompleted = computed(() => {if (user.value.isSetupCompleted)return true;})
 
     // actions
    //  function increment() {
    //    count.value++
    //  }
 
     return {
      user,
      showConfirmDialogue,
      chatResponse,
      chatRequest,
      docs,
      openSetupDialog,
      showLoader,
      ProgressNumber,
      Progress,
      showUpgradeDialogue
    }
   }
 )