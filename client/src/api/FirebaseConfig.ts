// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx7xp2_QPLIMaHzPSyHRhTEnOFbChCwng",
  authDomain: "real-time-chat-app-14d45.firebaseapp.com",
  databaseURL: "https://real-time-chat-app-14d45-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "real-time-chat-app-14d45",
  storageBucket: "real-time-chat-app-14d45.firebasestorage.app",
  messagingSenderId: "308413300893",
  appId: "1:308413300893:web:9b8039feb234c0e6d25474",
  measurementId: "G-H30NHY0W76"
};

// Initialize Firebase
const intializeFirebase = () => {
    const app = initializeApp(firebaseConfig);
    return app;
}

export default intializeFirebase;
