import { doc, setDoc } from "firebase/firestore"
import { FIREBASE_DB} from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

type user = {
  uid:string;
  displayName:string|null;
  email:string|null;
  phoneNumber:string|null;
}

export const useFireBase = () => {
  

  const nover = 'bright'

  async function addUser(user:user) {
    // check if user already exists
    await setDoc(doc(FIREBASE_DB, "users", user.uid), {
      uid:user.uid,
      displayName:user.displayName,
      email:user.email,
      phoneNumber:user.phoneNumber
    });
    console.log('done saving')
    return true;
    
  }

  return {addUser,nover}
}