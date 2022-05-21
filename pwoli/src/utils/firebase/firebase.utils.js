import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC05RozOiqiIWabrOzDH13HGC3V9QJVkwc",
  authDomain: "crown-87f7b.firebaseapp.com",
  projectId: "crown-87f7b",
  storageBucket: "crown-87f7b.appspot.com",
  messagingSenderId: "266901448709",
  appId: "1:266901448709:web:0c6ac2279f30a15493146c",
};

const firebasApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
