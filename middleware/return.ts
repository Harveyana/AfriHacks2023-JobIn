import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_DB,FIREBASE_AUTH } from '../firebaseConfig';
import { doc, onSnapshot } from "firebase/firestore"


export default defineNuxtRouteMiddleware((to, from) => {
    const auth = getAuth();
    // const user = FIREBASE_AUTH.currentUser
    const state = useGlobalState()
    // const user = state.user.value
    // if (!user) {
    //     return navigateTo('/auth');
    // }
    


    if (process.client){

        const nuxtApp = useNuxtApp()
        const auths = nuxtApp.$auth
        const user = auths.currentUser

        if(user) return navigateTo(from.fullPath);
            
    }
    


})