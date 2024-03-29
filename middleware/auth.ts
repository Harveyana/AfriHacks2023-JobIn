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
            onAuthStateChanged(nuxtApp.$auth, (user) => {
            if (user) {
            const uid = user.uid;
                onSnapshot(doc(FIREBASE_DB, "users", uid), (doc) => {
                const userdoc = doc.data()
                state.user.value = userdoc
                // console.log("Current data: ", userdoc?.docHistory)
                });
            // ...
            } else {
                return navigateTo('/auth');
            // User is signed out
            // ...
            }
        });
    }
    


})