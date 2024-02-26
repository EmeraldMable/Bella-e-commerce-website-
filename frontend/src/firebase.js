// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKCLZ64lpGrXHY-0CvNvJKn04BbfabMYY" ,
  authDomain: "bella-mern-stack.firebaseapp.com",
  projectId: "bella-mern-stack",
  storageBucket: "bella-mern-stack.appspot.com",
  messagingSenderId: "636953784562",
  appId: "1:636953784562:web:469e35c886616be332206b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);