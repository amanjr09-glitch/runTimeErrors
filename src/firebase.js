
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-lnlXOElDbLptbsSL9FjasviE8sHxWGg",
  authDomain: "innosprint-d22a6.firebaseapp.com",
  projectId: "innosprint-d22a6",
  storageBucket: "innosprint-d22a6.appspot.com",
  messagingSenderId: "169776379022",
  appId: "1:169776379022:web:dca13dc7ba897f4aa4c5df",
  measurementId: "G-B0XYECCGVM"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;