// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDn93chxL0y_CP8ohQut53YtpI1NP1PFvs",
  authDomain: "react-blog-5b312.firebaseapp.com",
  projectId: "react-blog-5b312",
  storageBucket: "react-blog-5b312.appspot.com",
  messagingSenderId: "34563455789",
  appId: "1:34563455789:web:91f53a6f594d82f602b1a4",
  measurementId: "G-ZTBVY38N8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db=getFirestore();
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();

