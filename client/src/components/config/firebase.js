// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw7UW9qupzyKoX-DL7MF3jY5e3fDj9wrA",
  authDomain: "air-quality-monitoring-89c66.firebaseapp.com",
  databaseURL: "https://air-quality-monitoring-89c66-default-rtdb.firebaseio.com",
  projectId: "air-quality-monitoring-89c66",
  storageBucket: "air-quality-monitoring-89c66.appspot.com",
  messagingSenderId: "227214262737",
  appId: "1:227214262737:web:9a644d774bc634d51e60f0",
  measurementId: "G-HHQ6XB1W6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
