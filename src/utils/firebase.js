// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeDyk5V2LWZCjOjdORO9qo9UVOJM9QrmE",
  authDomain: "ott-platform1.firebaseapp.com",
  projectId: "ott-platform1",
  storageBucket: "ott-platform1.appspot.com",
  messagingSenderId: "890490185337",
  appId: "1:890490185337:web:7a0ab5394334587cf396a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
