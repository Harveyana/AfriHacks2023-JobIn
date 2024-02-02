import { FIREBASE_AUTH} from '../firebaseConfig'

export default defineNuxtRouteMiddleware((to, from) => {
    // const auth = getAuth()
    const user = FIREBASE_AUTH.currentUser
    
    if (user) {
        return navigateTo('/');
    }
})