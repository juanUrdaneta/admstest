import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC--MSS9i70EHvNMeRjv85hY1Tr-3PdasY",
  authDomain: "adms-test-e5d12.firebaseapp.com",
  projectId: "adms-test-e5d12",
  storageBucket: "adms-test-e5d12.firebasestorage.app",
  messagingSenderId: "1070257786512",
  appId: "1:1070257786512:web:a2ee48138c979570301215",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authApp = getAuth(app);
