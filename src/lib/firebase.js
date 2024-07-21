import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: AIzaSyDokDNglPSfQOap_7ro9jLtw1ps8jEjKpI,
  authDomain: "react-chat-app-ad0f5.firebaseapp.com",
  projectId: "react-chat-app-ad0f5",
  storageBucket: "react-chat-app-ad0f5.appspot.com",
  messagingSenderId: "713165781880",
  appId: "1:713165781880:web:1b39a8b2218c5b9edee68d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
