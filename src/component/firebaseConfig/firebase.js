// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNTXEGHogWzIj0A-GUsMaz-Q0b5jAWMC8",
  authDomain: "mani-furniture.firebaseapp.com",
  databaseURL:
    "https://mani-furniture-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "mani-furniture",
  storageBucket: "mani-furniture.appspot.com",
  messagingSenderId: "131145963423",
  appId: "1:131145963423:web:f548872a4a740c65b80faa",
  measurementId: "G-G2Y21T3HVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
