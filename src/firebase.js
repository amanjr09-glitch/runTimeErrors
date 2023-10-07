import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC-lnlXOElDbLptbsSL9FjasviE8sHxWGg",
  authDomain: "innosprint-d22a6.firebaseapp.com",
  projectId: "innosprint-d22a6",
  storageBucket: "innosprint-d22a6.appspot.com",
  messagingSenderId: "169776379022",
  appId: "1:169776379022:web:466e260fec86d9f0a4c5df",
  measurementId: "G-CJKRDT371L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);