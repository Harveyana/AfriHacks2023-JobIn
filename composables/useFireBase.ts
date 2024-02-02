import { doc, setDoc, updateDoc, onSnapshot,collection, query, where, getDocs } from "firebase/firestore"
import { FIREBASE_DB} from '../firebaseConfig'
import { FIREBASE_AUTH} from '../firebaseConfig'

// import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

type user = {
  uid:string;
  displayName:string;
  email:string
  phoneNumber:string|undefined;
  photoUrl:string
}

type details = {
  name:string;
  occupation:string;
  location:string;
  bio:string;
}

export const useFireBase = () => {
  

  const nover = 'bright'

  async function addUser(user:user) {
    // check if user already exists
    await setDoc(doc(FIREBASE_DB, "users", user.uid), {
      isSetupCompleted:false,
      uid:user.uid,
      displayName:user.displayName,
      email:user.email,
      phoneNumber:user.phoneNumber,
      photoUrl:user.photoUrl
    });
    console.log('done saving')
    return true;
    
  }

  async function getUser() {
    // check if a user already exists
    const userId = FIREBASE_AUTH.currentUser?.uid

    if(userId){
      const user = onSnapshot(doc(FIREBASE_DB, "users", userId), (doc) => {
        // console.log("Current data: ", doc.data());
        return doc.data()
      });
      return user
    }

  }


  async function updateUserKey(key:string,data:boolean|string) {   // to update single keys in the database
    
    // check if user already exists
    const userId = FIREBASE_AUTH.currentUser?.uid

    if(userId){
      const userRef = doc(FIREBASE_DB, "users", userId);

      await updateDoc(userRef, {
        [key]: data,
      });

      return true
    }

    return false

  }

  async function updateUser(key:string,data:details) {  // to update only the user general data in the database
    
    // check if user already exists
    const userId = FIREBASE_AUTH.currentUser?.uid

    if(userId){
      const userRef = doc(FIREBASE_DB, "users", userId);

      await updateDoc(userRef, {
        [key]: data,
        displayName:data.name
      });

      return true
    }

    return false

  }

  async function updateUserDetails(key:string,data:{}[]|string|object) {  // to update user resume details in the database
    // check if user already exists
    const userId = FIREBASE_AUTH.currentUser?.uid

    if(userId){
      const userRef = doc(FIREBASE_DB, "users", userId);

      await updateDoc(userRef, {
        [`userDetails.${key}`]: data
      });

      return true
    }
    
    return false

  }


  async function queryUser() { // query for user existence
    // check if a user already exists
    const userEmail = FIREBASE_AUTH.currentUser?.email
    const userDoc = []

    if(userEmail){
      const q = query(collection(FIREBASE_DB, "users"), where("email", "==", userEmail)); // query to check if user exists with same email
      const querySnapshot = await getDocs(q);  // check if user already exists

      querySnapshot.forEach((doc) => {    
        console.log(doc.id, " => ", doc.data());
        userDoc.push(doc.data())    // if user is found, added to array 
      });

      if(userDoc.length) return true // if user already exists with same email we return true
       
      return false

    }

    
    


    
  }




  return {addUser,nover,getUser,updateUserDetails,updateUser,updateUserKey,queryUser}
}