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

  // async function signUp(email:string,password:string){
  //   const auth = getAuth()
  //   createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
  //   .then((userCredential) => {
  //     // Signed up 
  //     const user = userCredential.user;
  //     // ...
  //     return user;
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     return false
  //   });
  // }

  // async function googleSignup(){
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(FIREBASE_AUTH, provider)
  //   .then((result) => {
  //     console.log(result)
  //     return result
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     // const credential = GoogleAuthProvider.credentialFromResult(result);
  //     // const token = credential.accessToken;
  //     // // The signed-in user info.
  //     // const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

  // }

  return {addUser,nover}
}