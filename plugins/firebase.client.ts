import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";


export default defineNuxtPlugin(nuxtApp => {
    // const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyBZ-1xJOZwi1RD50fzG7H12rav0MbLqOKI",
        authDomain: "jobroute-58c44.firebaseapp.com",
        projectId: "jobroute-58c44",
        storageBucket: "jobroute-58c44.appspot.com",
        messagingSenderId: "949712068741",
        appId: "1:949712068741:web:772807911c16c68e6989ec",
        measurementId: "G-0G1EHEEXWF"
      };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})